import Navi from "./Navi";

export default function MainScreen({
  page = "home",
  children,
  showNavigation = true,
}) {
  const pageButton = page === "programsList" ? "dumbbell" : page;

  return (
    <main className="relative min-h-screen w-full bg-ddark">
      <div className="relative box-border flex h-screen flex-col items-center gap-3 overflow-x-scroll pb-17.5 pl-4 pr-4.5 pt-10">
        {children}
      </div>

      {showNavigation ? <Navi activeButton={pageButton} /> : 0}
    </main>
  );
}
