var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { gql } from "@apollo/client/";
var GET_USER_DATA = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query MyQuery($userId: String!) {\n    Usermanagment_users(where: { id: { _eq: $userId } }) {\n      id\n      name\n      currentDay\n      currentProgramId\n      daysInARow\n      lastTimeTrained\n    }\n  }\n"], ["\n  query MyQuery($userId: String!) {\n    Usermanagment_users(where: { id: { _eq: $userId } }) {\n      id\n      name\n      currentDay\n      currentProgramId\n      daysInARow\n      lastTimeTrained\n    }\n  }\n"])));
export default GET_USER_DATA;
var templateObject_1;
