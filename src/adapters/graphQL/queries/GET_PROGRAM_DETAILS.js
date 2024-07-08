var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { gql } from "@apollo/client";
var GET_PROGRAM_DETAILS = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query GetProgramDetails($programId: ID!) {\n    programs(where: { id: $programId }) {\n      image {\n        url\n      }\n      id\n      name\n      description\n      focus\n      difficulty\n      duration\n      workoutsWithDay {\n        day\n        workout {\n          id\n          name\n          category\n          duration\n        }\n      }\n    }\n  }\n"], ["\n  query GetProgramDetails($programId: ID!) {\n    programs(where: { id: $programId }) {\n      image {\n        url\n      }\n      id\n      name\n      description\n      focus\n      difficulty\n      duration\n      workoutsWithDay {\n        day\n        workout {\n          id\n          name\n          category\n          duration\n        }\n      }\n    }\n  }\n"])));
export default GET_PROGRAM_DETAILS;
var templateObject_1;
