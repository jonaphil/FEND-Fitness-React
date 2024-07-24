import { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";

export default function useAuthQuery(query, options) {
  const { isAuthenticated, getIdTokenClaims } = useAuth0();
  const [idToken, setIdToken] = useState();
  const [authenticatedQuery] = useLazyQuery(query); // FIXME: Use Hooks at the toplevel!

  useEffect(() => {
    async function getAndSetIdToken() {
      const idTokenClaims = await getIdTokenClaims();
      setIdToken(`Bearer ${idTokenClaims.__raw}`);
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
    const queryObj = authenticatedQuery(optionsWithAuthToken); // FIXME: Use Hooks at the toplevel!
    return queryObj;
  }
  return { data: undefined, loading: true, error: undefined };
}
