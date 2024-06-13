import SvgProgressCircle from "./SvgComponent/SvgProgressCircle";
import { colors } from "../../styles/variables";

export default function ProgressCircle({
  progress,
  background = "dark", // dark, light
  givenSize = "small", // small, large
  children,
}) {
  // TODO Question: How to dynamic assign values to const-variables.
  // Like const a = b == 0 ? 1 : 2; But as a switch case?
  // => one possible Answer: Do it with an object: {case1 : {}, case2: {}, case3:{}} and then get the values by case = "case1|case2|case3", obj[case] gets the specific object.
  const svgCircleProps = {
    filledColor: colors.dlight,
    emptyColor: colors.dmedium,
    borderColor: colors.ddark,
    strokeWidth: 0,
    progress,
  };

  switch (givenSize) {
    case "large":
      svgCircleProps.filledColor = colors.svgGradientRed;
      switch (background) {
        case "dark":
          svgCircleProps.emptyColor = "rgba(255,255,255,0.2)";
          break;
        case "light":
          svgCircleProps.emptyColor = "rgba(0,0,0,0.1)";
          break;
        default:
          break;
      }
      svgCircleProps.strokeWidth = 1;
      break;

    case "small":
      svgCircleProps.filledColor = colors.dlight;
      svgCircleProps.emptyColor = colors.dmedium;
      svgCircleProps.strokeWidth = 0;
      svgCircleProps.borderColor = "none";
      break;
    default:
      break;
  }

  return (
    <div className={`relative h-full w-full`}>
      {/* FIXME */}
      <div
        className={`relative h-full w-full ${
          givenSize === "large" && "rounded-full shadow-m-strong"
        }`}
      >
        <SvgProgressCircle
          filledColor={svgCircleProps.filledColor}
          emptyColor={svgCircleProps.emptyColor}
          borderColor={svgCircleProps.borderColor}
          strokeWidth={svgCircleProps.strokeWidth}
          progress={svgCircleProps.progress}
          className=""
        />
      </div>
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        {children}
      </div>
    </div>
  );
}
