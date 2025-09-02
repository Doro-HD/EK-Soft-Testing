import { expect, it } from "vitest";
import { calculateDiscount, catrigePrice } from "./index";

it.each([0, 1, 2, 3, 4])("Should return invalid orders", (num) => {
	const discountResult = calculateDiscount(num)

	expect(discountResult.isOrderValid).toBe(false)
});

it.each([5, 6, 50, 99])('Should not be eligeable for a discount', (num) => {
	const discountResult = calculateDiscount(num)

	expect(discountResult.isOrderValid).toBe(true)
	expect(discountResult.finalPrice).toBe(num * catrigePrice)
});

it.each([100, 101, 200])('Should be eligeable for a discount', (num) => {
	const discountResult = calculateDiscount(num)

	const expectedPrice = num * catrigePrice

	expect(discountResult.isOrderValid).toBe(true)
	expect(discountResult.finalPrice).toBe(expectedPrice - expectedPrice * 0.2)
});
