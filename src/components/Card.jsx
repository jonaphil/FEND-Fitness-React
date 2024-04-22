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
        <div
          className={`h-fit w-full bg-${bgColor} flex flex-row items-start gap-6 rounded-2.5xl pb-8 pl-5 pr-5 pt-7 justify-${justify} ${className}`}
        >
          {children}
        </div>
      );

    default:
      break;
  }
  return (
    <div
      className={`h-53.75 w-full bg-${bgColor} flex flex-col items-start rounded-2.5xl p-12.5 justify-${justify} ${className}`}
    >
      {children}
    </div>
  );
}
