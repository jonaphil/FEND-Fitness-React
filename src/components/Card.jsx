export default function Card({
  bgColor,
  size,
  justify,
  className = "",
  children,
  shadow,
}) {
  const layout = {
    h: "h-53.75",
    w: "w-full",
    p: "p-12.5",
    shadow: "shadow-m",
  };

  switch (size) {
    case "s":
      layout.h = "h-fit";
      layout.p = "pb-8 pl-5 pr-5 pt-7";
      break;

    default:
      break;
  }

  shadow && (layout.shadow = `shadow-${shadow}`);
  return (
    <div
      className={`${layout.h} ${layout.w} bg-${bgColor} flex flex-col items-start rounded-2.5xl ${layout.p} justify-${justify} ${className} ${layout.shadow} `}
    >
      {children}
    </div>
  );
}
