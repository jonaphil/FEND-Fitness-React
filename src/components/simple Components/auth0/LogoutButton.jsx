import { useAuth0 } from "@auth0/auth0-react";

export default function LogoutButton() {
  const { logout } = useAuth0();
  return (
    <button onClick={logout} className={"rounded-lg border px-4 py-2"}>
      Log out
    </button>
  );
}
