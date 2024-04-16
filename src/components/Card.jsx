export default function Card({ bgColor, justify, className = "", children }) {
  // TODO Define different Card-Types!
  return (
    <div
      className={`w-93.75 h-53.75 bg-${bgColor} p-12.5 rounded-2.5xl flex flex-col items-start justify-${justify} ${className}`}
    >
      {children}
    </div>
  );
}
