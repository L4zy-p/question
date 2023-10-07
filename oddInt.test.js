const func = require("./oddInt");

describe("test func function", () => {
  test("[7] should return 7", () => {
    expect(func.oddInt([7])).toBe(7);
  });

  test("[0] should return 0", () => {
    expect(func.oddInt([0])).toBe(0);
  });


  test("[1,1,2] should return 2", () => {
    expect(func.oddInt([1,1,2])).toBe(2);
  });


  test("[0,1,0,1,0] should return 2", () => {
    expect(func.oddInt([0,1,0,1,0])).toBe(0);
  });

  test("[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4", () => {
    expect(func.oddInt([1,2,2,3,3,3,4,3,3,3,2,2,1])).toBe(4);
  });

});
