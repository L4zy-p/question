const func = require("./permutation");

describe("test permutation function", () => {
  test("input a should return ['a']", () => {
    expect(func.permutation("a")).toEqual(["a"]);
  });

  test(`input ab should return ["ab", "ba"]`, () => {
    expect(func.permutation("ab")).toEqual(["ab", "ba"]);
  });

  test(`input abc should return [
    "abc",
    "acb",
    "bac",
    "bca",
    "cab",
    "cba",
  ]`, () => {
    expect(func.permutation("abc")).toEqual([
      "abc",
      "acb",
      "bac",
      "bca",
      "cab",
      "cba",
    ]);
  });

  test(`input aabb should return [
    "aabb",
    "abab",
    "abba",
    "baab",
    "baba",
    "bbaa",
  ]`, () => {
    expect(func.permutation("aabb")).toEqual([
      "aabb",
      "abab",
      "abba",
      "baab",
      "baba",
      "bbaa",
    ]);
  });
});
