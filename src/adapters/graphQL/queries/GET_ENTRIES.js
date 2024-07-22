var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { gql } from "@apollo/client";
var GET_ENTRIES = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query HygraphGetIds {\n    exercises {\n      id\n    }\n    workouts {\n      id\n      category\n    }\n    programs {\n      id\n    }\n    assets {\n      id\n    }\n  }\n"], ["\n  query HygraphGetIds {\n    exercises {\n      id\n    }\n    workouts {\n      id\n      category\n    }\n    programs {\n      id\n    }\n    assets {\n      id\n    }\n  }\n"])));
export default GET_ENTRIES;
var templateObject_1;
