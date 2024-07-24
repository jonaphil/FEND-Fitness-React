import { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useLazyQuery, useQuery } from "@apollo/client";
import router from "@contexts/Routing";
import { UserContext } from "@contexts/Context";
import GET_USER_DATA from "@adapters/graphQL/queries/GET_USER_DATA";
import GET_PROGRAM_DETAILS from "@adapters/graphQL/queries/GET_PROGRAM_DETAILS";
import generateCurrentProgramData from "@utils/helpers/generateCurrentProgramData";

export default function App() {
  const { user: auth0user, isAuthenticated, getIdTokenClaims } = useAuth0();
  const [idJWT, setIdJWT] = useState();
  const [fetchUserData] = useLazyQuery(GET_USER_DATA);
  const [fetchProgramData] = useLazyQuery(GET_PROGRAM_DETAILS);

  const defaultUser = {
    name: "",
    image: "/assets/images/exampleUser.jpg",
    current: {
      workout: undefined,
    },
  };
  let userData = defaultUser;
  const [user, setUser] = useState(userData);

  /*
  Login
    The following effect is ececuted in the scope of the ContextProvider.
    executed when:
      - LoginStatus changes
      - auth0userData changes
    fetches and sets:
      - idToken from auth0
      - userData from hasura
      - userData on current Program from hygraph
  */
  useEffect(() => {
    const fetchAndSetUserData = async (authToken) => {
      fetchUserData({
        variables: {
          userId: auth0user.sub,
        },
        context: {
          apiName: "hasura",
          authToken,
        },
        onCompleted: (data) => {
          const {
            name,
            id,
            lastTimeTrained,
            daysInARow,
            currentDay,
            currentProgramId,
          } = data.Usermanagment_users[0];
          userData = {
            name,
            id,
            image: auth0user.picture,
            lastTimeTrained,
            daysInARow,
            current: {
              day: currentDay,
              programId: currentProgramId,
            },
          };
          setUser(userData);
          try {
            fetchProgramData({
              variables: {
                programId: currentProgramId,
              },
              context: {
                apiName: "hygraph",
              },
              onCompleted: (programData) => {
                console.log(userData);
                const currentProgramData = generateCurrentProgramData(
                  userData.current.day,
                  programData.programs[0]
                );

                userData = {
                  ...userData,
                  current: currentProgramData,
                };
                console.log(userData);
                setUser(userData);
              },
            });
          } catch (e) {
            console.log(e);
          }
        },
      });
    };
    const getAndSetAllUserData = async () => {
      const idTokenClaimData = await getIdTokenClaims();
      setIdJWT(idTokenClaimData.__raw);
      console.log(idJWT);
      fetchAndSetUserData(idTokenClaimData.__raw);
    };
    if (isAuthenticated) {
      getAndSetAllUserData();
      console.log(auth0user);
    } else {
      setUser(defaultUser);
    }
  }, [isAuthenticated, auth0user]);

  return (
    <UserContext.Provider value={[user, setUser, idJWT]}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}
