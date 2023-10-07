const func = require("./smile");

describe("test smile function", () => {
  test("([':)', ';(', ';}', ':-D'] should return 2", () => {
    expect(func.smile([':)', ';(', ';}', ':-D'])).toBe(2);
  });

  test("[';D', ':-(', ':-)', ';~)'] should return 3", () => {
    expect(func.smile([';D', ':-(', ':-)', ';~)'])).toBe(3);
  });


  test("[';]', ':[', ';*', ':$', ';-D'] should return 1", () => {
    expect(func.smile([';]', ':[', ';*', ':$', ';-D'])).toBe(1);
  });

});
