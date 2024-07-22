import { useAuth0 } from "@auth0/auth0-react";
import Spinner from "@components/simple Components/Suspense/Spinner";
import ErrorElement from "@components/simple Components/ErrorElement";

export default function Auth0Wrapper({ children }) {
  const { isLoading, error } = useAuth0();
  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <ErrorElement />;
  }
  return <>{children}</>;
}
