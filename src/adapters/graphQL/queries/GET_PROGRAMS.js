var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { gql } from "@apollo/client";
var GET_PROGRAMS = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query GetPrograms {\n    programs {\n      id\n      name\n      duration\n    }\n  }\n"], ["\n  query GetPrograms {\n    programs {\n      id\n      name\n      duration\n    }\n  }\n"])));
export default GET_PROGRAMS;
var templateObject_1;
