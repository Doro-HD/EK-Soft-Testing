import { it, expect } from "vitest";
import { calculateFramePrice } from "./index";

// normal frameing price 3000
// area exceeds 1600 cm2 - price is 3500

// partitions
// valid width 10-30
// valid height 30-60
// invalid width 1-9
// invalid width 31-*
// invalid height 30-60
// invalid height 61-*

function create(x: number, y: number) {
  return { x, y };
}

it.each([create(15, 45), create(10, 60), create(11, 59)])(
  "Should return 3000",
  ({ x, y }) => {
    const price = calculateFramePrice(x, y);

    expect(price).toBe(3000);
  },
);

// lowest x possible is 27 with y being 60
// lowest y possible is 54 with x being 30
it.each([create(30, 54), create(27, 60), create(29, 56), create(28, 59)])(
  "Should return 3500",
  ({ x, y }) => {
    const price = calculateFramePrice(x, y);

    expect(price).toBe(3500);
  },
);

it.each([
  create(0, 30),
  create(10, 0),
  create(9, 30),
  create(31, 60),
  create(10, 29),
  create(30, 61),
])("Should throw an error", ({ x, y }) => {
  expect(() => calculateFramePrice(x, y)).toThrowError();
});
