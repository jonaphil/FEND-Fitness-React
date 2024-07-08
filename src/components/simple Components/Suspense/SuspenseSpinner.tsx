import { Suspense } from "react";
import Spinner from "./Spinner";

export default function SuspenseSpinner({ children }) {
  return <Suspense fallback={<Spinner />}>{children}</Suspense>;
}
