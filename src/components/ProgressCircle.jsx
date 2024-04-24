import { dlight, dmedium, ddark } from "../styles/variables";

export default function ProgressCircle({
  percentage,
  size,
  filledColor,
  emptyColor = "dmedium",
  bgColor,
}) {
  const colorTable = { dlight, dmedium, ddark };
  const emptyColorHex = colorTable[emptyColor];

  const conicGradientStyle = {
    background: `conic-gradient(transparent 0 ${
      percentage - 0.1
    }%, ${emptyColorHex} ${percentage}% 100%)`,
  };
  console.log(conicGradientStyle);
  return (
    <div
      className={`relative box-content h-20 w-20 rounded-full border border-ddark`}
    >
      <div
        className={`absolute box-border h-full w-full origin-center bg-${filledColor} full z-0 rounded-full `}
      ></div>
      <div
        style={conicGradientStyle}
        className={`absolute z-10 h-full w-full origin-center scale-[101%] rounded-full`}
      ></div>
      <div
        className={`absolute rounded-full bg-${bgColor} z-20 h-full w-full origin-center scale-75`}
      ></div>
    </div>
  );
}
