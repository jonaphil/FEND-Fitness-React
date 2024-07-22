import { useAuth0 } from "@auth0/auth0-react";

export default function LoginButton() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  console.log(`Is Authenticated: ${isAuthenticated}`);
  return (
    !isAuthenticated && (
      <button
        onClick={loginWithRedirect}
        className={"rounded-lg border px-4 py-2"}
      >
        Log in
      </button>
    )
  );
}
