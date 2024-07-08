import Spinner from "@components/simple Components/Suspense/Spinner";

export default function LoadingPage() {
  return (
    <h1 className="flex h-screen w-screen flex-col items-center justify-center">
      <Spinner />
    </h1>
  );
}
