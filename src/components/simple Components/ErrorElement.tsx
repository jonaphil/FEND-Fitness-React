import { useAsyncError } from "react-router-dom";

export default function ErrorElement() {
  const asyncError = useAsyncError();

  if (asyncError) {
    console.log(asyncError);
  }
  return (
    <div className="rounded-md bg-red-600 p-4">
      Sorry, an error occured. Please try again.
    </div>
  );
}
