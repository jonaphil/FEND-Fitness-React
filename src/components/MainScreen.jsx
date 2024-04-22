import Navi from "./Navi";

export default function MainScreen({ page = "home", children }) {
  const pageButton = page === "browseList" ? "dumbbell" : page;

  return (
    <div className="h-full w-full bg-ddark relative">
      <div className="h-full pt-10 pl-4 pr-4.5 pb-18 flex flex-col gap-3 items-center justify-center box-border">
        {children}
      </div>

      <Navi activeButton={pageButton} />
    </div>
  );
}
