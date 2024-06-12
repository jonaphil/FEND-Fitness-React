export default function InfoDot({ size = 4, color, text }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className={`h-${size} w-${size} rounded-full bg-${color}`}></div>
      <p className="text-3xs tracking-widest">{text.toUpperCase()}</p>
    </div>
  );
}
