import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { VOTE_WORKOUT } from "@adapters/graphQL/mutation/vote";
import SET_USER_TRAINING_DATA from "@adapters/graphQL/mutation/userData/SET_USER_TRAINING_DATA";
import isYesterday from "@utils/dateAndTime";
import { getRandomString } from "@utils/random/generator";
import generateCurrentProgramData from "@utils/helpers/generateCurrentProgramData";
import useUserContext from "./useUserContext";

export default function useFinish() {
  const { user, setUser, resetUserProgram, idJWT, contextUserProgram } =
    useUserContext();
  const [sendWorkoutVote, voteResponse] = useMutation(VOTE_WORKOUT); // FIXME Use with suspend?
  const [setUserTrainingDataRemote, updateDataResponse] = useMutation(
    SET_USER_TRAINING_DATA
  );
  const isLoading = voteResponse.loading || updateDataResponse.loading;
  const navigate = useNavigate();

  // const confirm = (message, action) => {
  //   setPopUp.object({
  //     message,
  //     options: [
  //       {
  //         name: "Ok!",
  //         action,
  //       },
  //     ],
  //   });
  //   setPopUp.toggle();
  // };

  const voteWorkout = (vote) => {
    console.log(`You voted ${vote} for this Workout!`);
    const voteVariables = {
      VoteId: getRandomString(20),
      UserId: user.id,
      Vote: vote,
      WorkoutId: user.current.workout.id,
    };
    sendWorkoutVote({
      variables: voteVariables,
      context: { destination: "hasura", authToken: idJWT },
      onCompleted: () => {
        // confirm("Danke für deine Rückmeldung!", navigate("/home/dashboard"));
        console.log("Danke für die Rückmeldung!");
        if (!isLoading) {
          navigate("/home/dashboard");
        }
      },
      onError: (error) => {
        console.log(`Error while sending vote to server:${error}`);
      },
    });
    // TODO: OnCompletion! -> Confirm & navigate
  }; // TEST
  const voteProgram = (vote) => {
    // TODO Post Vote to Hasura
    console.log(`You voted ${vote} for this Program!`);
  };

  const finishProgram = (vote) => {
    voteProgram(vote);
  };
  const finishWorkout = (vote) => {
    const now = new Date();
    voteWorkout(vote);
    if (user.current.day === user.current.length) {
      resetUserProgram();
      return;
    }
    const nextCurrent = generateCurrentProgramData(
      user.current.day + 1,
      contextUserProgram
    );
    const newUserData = {
      ...user,
      current: nextCurrent,
      lastTimeTrained: `${now.getTime()}`,
      daysInARow: isYesterday(now.getTime(), parseInt(user.lastTimeTrained, 10))
        ? user.daysInARow + 1
        : 1,
    };
    setUser(newUserData);
    setUserTrainingDataRemote({
      variables: {
        userId: user.id,
        currentDay: newUserData.current.day,
        currentProgramId: newUserData.current.programId,
        daysInARow: newUserData.daysInARow,
        lastTimeTrained: newUserData.lastTimeTrained,
      },
      context: {
        apiName: "hasura",
        authToken: idJWT,
      },
      onCompleted: (data) => {
        console.log("Trainingsdaten erfolgreich aktualisiert!");
        console.log(data);
        if (!isLoading) {
          navigate("/home/dashboard");
        }
      },
      onError: (error) => {
        console.log(error);
      },
    });
  }; // TEST

  return {
    isLoading,
    finishProgram,
    finishWorkout,
  };
}
