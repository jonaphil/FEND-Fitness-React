import Navi from "./Navi";

export default function MainScreen({ page = "home", children }) {
  const pageButton = page === "excerciseList" ? "dumbbell" : page;

  return (
    <div className="min-h-screen w-full bg-ddark relative">
      <div className="relative h-full pt-10 pl-4 pr-4.5 pb-17.5 flex flex-col gap-3 items-center justify-center box-border">
        {children}
      </div>

      <Navi activeButton={pageButton} />
    </div>
  );
}
