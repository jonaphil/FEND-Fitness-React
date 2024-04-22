export default function Card({
  bgColor,
  size,
  justify,
  className = "",
  children,
}) {

  switch (size) {
    case "s":
      return (
      <div className={`w-full h-fit bg-${bgColor} pt-7 pb-8 pl-5 pr-5 rounded-2.5xl flex flex-row gap-6 items-start justify-${justify} ${className}`}>
          {children}
        </div>
      )

    default:
      break;
  }
  return (
    <div
      className={`w-full h-53.75 bg-${bgColor} p-12.5 rounded-2.5xl flex flex-col items-start justify-${justify} ${className}`}
    >
      {children}
    </div>
  );
}
