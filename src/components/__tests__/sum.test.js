const { sum } = require("../sum");

// Test case 1: Sum of positive numbers
test("Adding 1 + 2 should return 3", () => {
  expect(sum(1, 2)).toBe(3);
});

// Test case 2: Sum of negative numbers
test("Adding -1 + -2 should return -3", () => {
  expect(sum(-1, -2)).toBe(-3);
});

// Test case 3: Sum of positive and negative numbers
test("Adding 5 + -3 should return 2", () => {
  expect(sum(5, -3)).toBe(2);
});

// Test case 4: Sum of zero
test("Adding 0 + 0 should return 0", () => {
  expect(sum(0, 0)).toBe(0);
});
