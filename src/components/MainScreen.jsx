import Navi from "./Navi";

export default function MainScreen({ page = "home", children }) {
  const pageButton = page === "excerciseList" ? "dumbbell" : page;

  return (
    <div className="relative min-h-screen w-full bg-ddark">
      <div className="relative box-border flex h-full flex-col items-center justify-center gap-3 pb-17.5 pl-4 pr-4.5 pt-10">
        {children}
      </div>

      <Navi activeButton={pageButton} />
    </div>
  );
}
