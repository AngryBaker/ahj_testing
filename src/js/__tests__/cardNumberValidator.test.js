import cardNumberValidator from "../cardNumberValidator";

test("should return false", () => {
  const result = cardNumberValidator("0000055555");

  expect(result).toBe(false);
});

test("should return true", () => {
  const result = cardNumberValidator("30569309025904");

  expect(result).toBe(true);
});
