import isEven from "../../helpers/generalFunctions";

export default function StatusList({
  length,
  currentExercise,
}: {
  length: number;
  currentExercise: number;
}): React.JSX.Element {
  const array: Array<any> = new Array(length).fill(0);
  return (
    <div className="max-w-full overflow-hidden">
      <div
        style={{ transform: `translateX(-${currentExercise * 6}rem)` }}
        className="transition-all duration-700"
      >
        <div className="translate-x-1/2">
          <div className="top-12 mt-8 flex w-fit -translate-x-4 flex-row items-center justify-center self-start overflow-hidden">
            {array.map((w: Object, i: number) => {
              return (
                <>
                  {i !== 0 && <Connection reactKey={`Connection-${i}`} />}
                  <div
                    key={`dot-${i}`}
                    className={`box-border h-8 w-8 rounded-full transition-all duration-1000 ${
                      i > currentExercise && "border-4 border-dmedium"
                    }`}
                  >
                    <div
                      key={`filling-${i}`}
                      className={`absolute rounded-full transition-opacity duration-1000 ${
                        i <= currentExercise
                          ? "h-8 w-8 bg-gradient-red opacity-100"
                          : "opacity-0"
                      }`}
                    />
                  </div>
                </>
              );
            })}
            {isEven(length) && <div className="w-20" />}
          </div>
        </div>
      </div>
    </div>
  );
}

function Connection({ reactKey }: { reactKey: String }): React.JSX.Element {
  return (
    <div
      key={`${reactKey}`}
      className=" h-0 w-16 border-t-4 border-dotted border-dmedium"
    ></div>
  );
}
