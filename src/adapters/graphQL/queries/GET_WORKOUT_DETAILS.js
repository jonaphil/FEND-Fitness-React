var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { gql } from "@apollo/client";
var GET_WORKOUT_DETAILS = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query HygraphGetWorkoutDetails($workoutId: ID!) {\n    workouts(where: { id: $workoutId }) {\n      id\n      name\n      category\n      duration\n      exercises {\n        ... on ExerciseWithReps {\n          exercise {\n            id\n            name\n            description\n          }\n          reps\n        }\n        ... on ExerciseWithDuration {\n          exercise {\n            id\n            name\n            description\n          }\n          duration\n        }\n      }\n    }\n  }\n"], ["\n  query HygraphGetWorkoutDetails($workoutId: ID!) {\n    workouts(where: { id: $workoutId }) {\n      id\n      name\n      category\n      duration\n      exercises {\n        ... on ExerciseWithReps {\n          exercise {\n            id\n            name\n            description\n          }\n          reps\n        }\n        ... on ExerciseWithDuration {\n          exercise {\n            id\n            name\n            description\n          }\n          duration\n        }\n      }\n    }\n  }\n"])));
export default GET_WORKOUT_DETAILS;
var templateObject_1;
