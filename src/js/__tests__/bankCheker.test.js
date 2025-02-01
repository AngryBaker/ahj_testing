import bankCheker from "../bankCheker";

test.each([
  [4532436559004663, ".visa"],
  [6011475967967801, ".discover"],
  [5255855530814381, ".master-card"],
  [2202206175984659, ".mir"],
  [3545538019684096, ".jcb"],
  [379794200127695, ".american-express"],
  [36742190095898, ".diners"],
])("testing health rate function", (obj, expected) => {
  const result = bankCheker(obj);
  expect(result).toBe(expected);
});
