import SvgDefEl from "../../../styles/SvgDefEl";

export default function SvgProgressCircle({
  innerRadius = 97,
  outerRadius = 117,
  filledColor,
  emptyColor = "dmedium",
  borderColor = "#1b1b1b",
  strokeWidth = 1,
  progress = 17,
  className = "",
}) {
  const cleanInputPercent = (inputPercent) => {
    return parseInt( String( inputPercent).slice(-2), 10 );
  }

  //geometrics
  const size = 2 * outerRadius + strokeWidth;

  const calcProgress = cleanInputPercent(progress) > 100 ? cleanInputPercent(progress) - 99.9 : cleanInputPercent(progress) - 0.1; //FIXME: less shitty way!
  console.log(calcProgress);
  const rad = (calcProgress / 100) * 2 * Math.PI;

  const center = {
    x: size / 2,
    y: size / 2,
  };

  const lines = {
    outerArc: `M ${center.x} ${
      center.y - outerRadius
    } A ${outerRadius} ${outerRadius} 0 ${calcProgress > 50 ? 1 : 0} 1 ${
      Math.sin(rad) * outerRadius + center.x
    } ${-Math.cos(rad) * outerRadius + center.y}`,
    endStraightLine: `L ${Math.sin(rad) * innerRadius + center.x} ${
      -Math.cos(rad) * innerRadius + center.y
    }`,
    innerArc: `A ${innerRadius} ${innerRadius} 1 ${
      calcProgress > 50 ? 1 : 0
    } 0 ${center.x} ${center.y - innerRadius}`,
    zeroStraigtLine: `z`,
  };
  console.log(`${-Math.cos(rad)} * ${outerRadius + center.y}`);
  console.log(calcProgress);

  //styling
  const style = {
    strokeWidth: `${strokeWidth}`,
    stroke: `${borderColor}`,
    fill: "transparent",
  };

  return (
    <svg
      xmlns="https://www.w3.org/2000/svg"
      className={`${className}`}
      style={style}
      viewBox={`0 0 ${size} ${size}`}
    >
      <SvgDefEl /> {/*FIXME: Put this definition at the right place! */}
      <mask id="innerCircleCutOut">
        <rect x="0" y="0" width={size} height={size} fill="white"></rect>
        <circle
          cx={center.x}
          cy={center.y}
          r={innerRadius}
          fill="black"
        ></circle>
      </mask>
      <circle
        cx={center.x}
        cy={center.y}
        r={outerRadius}
        fill={emptyColor}
        mask="url(#innerCircleCutOut)"
      ></circle>
      <circle
        cx={center.x}
        cy={center.y}
        r={innerRadius}
        mask="url(#innerCircleCutOut)"
      ></circle>
      <path
        d={
          lines.outerArc +
          lines.endStraightLine +
          lines.innerArc +
          lines.zeroStraigtLine
        }
        fill={filledColor}
      ></path>
    </svg>
  );
}
