import { Suspense } from "react";
import Spinner from "./Spinner";
export default function SuspenseSpinner(_a) {
    var children = _a.children;
    return <Suspense fallback={<Spinner />}>{children}</Suspense>;
}
