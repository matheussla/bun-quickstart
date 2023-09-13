import { expect, mock, test } from "bun:test";

test("2 + 2", () => {
  expect(2 + 2).toBe(4);
});

const random = mock(() => Math.random());

test("random", async () => {
  const val = random();
  expect(val).toBeGreaterThan(0);
  expect(random).toHaveBeenCalled();
  expect(random).toHaveBeenCalledTimes(1);
});