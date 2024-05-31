export default function InfoDot({ color, text }) {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <div className={`h-4 w-4 rounded-full bg-${color}`}></div>
      <p className="text-2xs">{text}</p>
    </div>
  );
}
