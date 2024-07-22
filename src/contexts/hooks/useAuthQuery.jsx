import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";

export default function useAuthQuery(query, options) {
  const { isAuthenticated, getIdTokenClaims } = useAuth0();
  const [idToken, setIdToken] = useState();

  useEffect(() => {
    async function getAndSetIdToken() {
      const idTokenClaims = await getIdTokenClaims();
      setIdToken(idTokenClaims.__raw);
    }
    if (isAuthenticated) {
      getAndSetIdToken();
    }
  }, [isAuthenticated]);

  const optionsWithAuthToken = {
    ...options,
    context: { ...options.context, authToken: idToken },
  };

  if (idToken) {
    const queryObj = useQuery(query, optionsWithAuthToken);
    return queryObj;
  }
  return { data: undefined, loading: true, error: undefined };
}
