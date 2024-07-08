import { Suspense } from "react";
import Card from "@components/simple Components/Card";

export default function SuspenseCard({ children }) {
  return (
    <>
      <Suspense
        fallback={<Card bgColor={"dmedium"} className={"animate-pulse"} />}
      >
        {children}
      </Suspense>
    </>
  );
}
