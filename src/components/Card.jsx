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
    itmes: "items-start",
  };

  switch (size) {
    case "s":
      layout.h = "h-fit";
      layout.p = "pb-8 pl-5 pr-5 pt-7";
      break;

    case "m":
      layout.h = "h-fit";
      layout.p = "pt-25 pb-7 px-7";
      layout.items = "items-stretch";
      break;

    default:
      break;
  }

  shadow && (layout.shadow = `shadow-${shadow}`);
  return (
    <div
      className={`${layout.h} ${layout.w} bg-${bgColor} flex flex-col ${layout.items} rounded-2.5xl ${layout.p} justify-${justify} ${className} ${layout.shadow} `}
    >
      {children}
    </div>
  );
}
