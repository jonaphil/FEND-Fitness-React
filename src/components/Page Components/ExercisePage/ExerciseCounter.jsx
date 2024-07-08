import CounterReps from "./CounterReps";
import CounterDuration from "./CounterDuration";
export default function ExerciseCounter(_a) {
    var type = _a.type, count = _a.count, id = _a.id, nextStep = _a.nextStep;
    if (type === "reps") {
        return <CounterReps reps={count} key={"".concat(id)}/>;
    }
    else if (type === "duration") {
        return (<CounterDuration duration={count} key={"".concat(id)} nextStep={nextStep}/>);
    }
}
