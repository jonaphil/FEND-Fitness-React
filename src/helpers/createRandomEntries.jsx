import { gql, useMutation } from "@apollo/client";
import { getExerciseList } from "../queries/exerciseList";

export function CreateRandomExercisesButton() {
  function generateRandomExerciseMutation() {
    const names = [
      "Exercise Lorem",
      "Exercise ipsum",
      "Exercise dolor",
      "Exercise sit",
      "Exercise amet",
      "Exercise consectetur",
      "Exercise adipisicing",
      "Exercise elit",
      "Exercise Eos",
      "Exercise sequi",
      "Exercise dignissimos",
      "Exercise consequuntur",
      "Exercise autem",
      "Exercise repudiandae",
      "Exercise delectus",
      "Exercise cupiditate",
      "Exercise rem",
      "Exercise minima",
      "Exercise perspiciatis",
      "Exercise iste",
      "Exercise odio",
      "Exercise ipsam",
      "Exercise alias",
      "Exercise ab",
      "Exercise itaque",
    ];
    const descriptions = [
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet.",
      "Nisi anim cupidatat excepteur officia.",
      "Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident.",
      "Nostrud officia pariatur ut officia.",
      "Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate.",
      "Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod.",
      "Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.",
      "Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
    ];
    const types = ["duration", "reps"];

    const ADD_EXERCISE = gql`
    mutation AddExercise{
      createExercise(data:{name: "${getRandom(
        names
      )}", description: "${getRandom(descriptions)}", type: ${getRandom(
      types
    )}}){
        id
        name
        description
        type
      }
    }

  `;
    return ADD_EXERCISE;
  }

  const [addExercise, { data, loading, error }] = useMutation(
    generateRandomExerciseMutation()
  );

  if (loading) return "Loading...";
  if (error) return `Error: ${error.message}`;
  if (data) console.log(data);
  return (
    <button onClick={addExercise} className="rounded-md bg-dmedium p-4">
      Add random Exercises
    </button>
  );
}

export function CreateRandomWorkoutsButton({ exerciseList }) {
  const originalExerciseList = exerciseList;

  function generateRandomWorkoutMutation() {
    const categoryList = [
      "cardio",
      "coordination",
      "mobility",
      "weightTraining",
    ];
    const nameList = [
      "Workout Lorem",
      "Workout ipsum",
      "Workout dolor",
      "Workout sit",
      "Workout amet",
      "Workout consectetur",
      "Workout adipisicing",
      "Workout elit",
      "Workout Eos",
      "Workout sequi",
      "Workout dignissimos",
      "Workout consequuntur",
      "Workout autem",
      "Workout repudiandae",
      "Workout delectus",
      "Workout cupiditate",
      "Workout rem",
      "Workout minima",
      "Workout perspiciatis",
      "Workout iste",
      "Workout odio",
      "Workout ipsam",
      "Workout alias",
      "Workout ab",
      "Workout itaque",
    ];
    const exerciseList = getShuffledArray(originalExerciseList);
    const amountExercises = randomInt(
      10,
      exerciseList.length < 20 ? exerciseList.length : 20
    ); //between 10 and 20 exercises
    const duration = randomInt(amountExercises * 1.2, amountExercises * 1.7); //between 1.2 and 1.7 minutes per exercise
    const exerciseTypeList = [
      ["reps", "ExerciseWithReps"],
      ["duration", "ExerciseWithDuration"],
    ];

    const generateWorkoutExercisesList = (exerciseList) => {
      const possibleExercises = exerciseList;
      let workoutExercisesString = `[`;

      for (let i = 0; i < amountExercises; i++) {
        const exerciseType = getRandom(exerciseTypeList);
        const exercise = possibleExercises.shift();
        const simpleExerciseString = `
        {${exerciseType[1]}: 
          {${exerciseType[0]}: ${
          exerciseType[0] === "reps" ? randomInt(7, 15) : randomInt(30, 90, 10)
        }, exercise: {
            connect: {
              id: "${exercise.id}"} } } },`;
        workoutExercisesString += simpleExerciseString;
      }
      workoutExercisesString += "]";
      return workoutExercisesString;
    };

    /*Way of Adding a Workout!

    mutation AddWorkout {
  createWorkout(
    data: {
      name: "Just A simple Workout", 
      category: cardio, 
      duration: 35, 
      exercises: { create:
        [
        	{ExerciseWithReps: {reps: 5, exercise: { connect: {id: "cl2hkp3g6zjfb0atbsfchrvsv"} } } }, 
          {ExerciseWithDuration: {duration: 30, exercise: { connect: {id: "clwgxezzh5hgy08w5k2jqurcf"} } } }
        ]
      }
    }
) {
    id
    name
    exercises {
      ... on ExerciseWithReps {
        exercise {
          name
        }
        reps
      }
      ... on ExerciseWithDuration {
        exercise {
          name
        }
        duration
      }
    }
  }
}

    */
    const ADD_WORKOUT = gql`
    mutation AddWorkout {
      createWorkout(
        data: {
          name: "${getRandom(nameList)}", 
          category: ${getRandom(categoryList)}, 
          duration: ${duration}, 
          exercises: { create:
            ${generateWorkoutExercisesList(exerciseList)}
          }
        }
    ) {
        id
        name
        exercises {
          ... on ExerciseWithReps {
            exercise {
              name
            }
            reps
          }
          ... on ExerciseWithDuration {
            exercise {
              name
            }
            duration
          }
        }
      }
    }
    `;
    console.log(ADD_WORKOUT);
    return ADD_WORKOUT;
  }

  const [addWorkout, { data, loading, error }] = useMutation(
    generateRandomWorkoutMutation()
  );

  if (loading) return "Loading...";
  if (error) return `Error: ${error.message}`;
  if (data) console.log(data);
  return (
    <button onClick={addWorkout} className="rounded-md bg-dmedium p-4">
      Add random Workout
    </button>
  );
}

function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function randomInt(lowerLimit = 0, upperLimit = 10, step = 1) {
  const solution =
    Math.floor((Math.random() * (upperLimit - lowerLimit)) / step) * step +
    lowerLimit;
  return solution;
}

function getShuffledArray(unshuffledArray) {
  const array = unshuffledArray;
  const shuffledArray = [];
  let currentIndex = 0;

  while (currentIndex < array.length) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    shuffledArray.splice(randomIndex, 0, array[currentIndex]);
    currentIndex++;
  }
  return shuffledArray;
}
