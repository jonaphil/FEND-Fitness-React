import { shuffleArray } from "@utils/random/array";

export function randomInt(upperLimit = 10, lowerLimit = 0, step = 1) {
  const solution =
    Math.floor((Math.random() * (upperLimit - lowerLimit)) / step) * step +
    lowerLimit;
  return Math.round(solution); // It is rounded again, because I got problems of having floats in the graphql mutation string.
}

export function generateRandomList(length) {
  const list = Array.from(Array(length), (x, i) => i);
  shuffleArray(list);
  return list;
}

export function getRandomString(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const charactersLength = characters.length;
  let result = "";

  for (let i = 0; i <= length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
