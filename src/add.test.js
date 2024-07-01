const add = (a, b) => a + b;

describe("add", () => {
  it("works", () => {
    expect(add(1, 2)).toEqual(3);
  });
});
