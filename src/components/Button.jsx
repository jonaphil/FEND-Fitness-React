export default function Button({
  textColor = "ddark",
  bgColor = "gradient-red",
  onClick,
  children,
  small = false,
}) {
  return (
    <button
      className={`bg-${bgColor} rounded-full transition-all duration-500 ${
        small
          ? "flex h-7 w-7 flex-row items-center justify-center"
          : "px-6 py-3"
      } text-${textColor}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
