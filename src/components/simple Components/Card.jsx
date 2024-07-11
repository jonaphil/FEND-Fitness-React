export default function Card({
  bgColor,
  size,
  justify = "between",
  className = "",
  children,
  shadow,
  items = "start",
}) {
  const layout = {
    h: "h-53.75",
    w: "w-full",
    p: "p-12.5",
    shadow: "shadow-m",
    items,
    gap: "0",
  };

  switch (size) {
    case "floating":
      layout.h = "h-fit";
      layout.p = "pb-8 pl-5 pr-5 pt-7";
      layout.w = "w-80";
      layout.items = "center";
      layout.gap = 8;
      break;

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
      className={`${layout.h} ${layout.w} bg-${bgColor} flex flex-col items-${layout.items} gap-${layout.gap} rounded-2.5xl ${layout.p} justify-${justify} ${className} ${layout.shadow} `}
    >
      {children}
    </div>
  );
}
