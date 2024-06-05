export function ErrorPage() {
  return (
    <h1 className="flex h-screen w-screen items-center justify-center">
      Error!
    </h1>
  );
}

export function ErrorButton() {
  return (
    <div className="rounded-md bg-red-600 p-4">
      Sorry, an error occured. Please try again.
    </div>
  );
}
