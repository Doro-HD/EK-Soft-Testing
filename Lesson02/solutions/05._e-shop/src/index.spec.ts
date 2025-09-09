import { it, expect } from 'vitest';
import { calculateDiscount } from './index';

// partitions
// 0.01-300
// 300.01-800
// 800.01
// 0
// 00.009-*

it.each([0.01, 0.02, 150, 299.99, 300])("Should return no discount", (purchasePrice) => {
	const finalPrice = calculateDiscount(purchasePrice);

	expect(finalPrice).toBe(purchasePrice)
});

it.each([300.1, 400, 799.99, 800])("Should return 5% discount", (purchasePrice) => {
	const finalPrice = calculateDiscount(purchasePrice);

	const expectation = purchasePrice - purchasePrice * 0.05;

	expect(finalPrice).toBe(expectation)
});

it.each([800.01, 900])("Should return 10% discount", (purchasePrice) => {
	const finalPrice = calculateDiscount(purchasePrice);

	const expectation = purchasePrice - purchasePrice * 0.10;

	expect(finalPrice).toBe(expectation)
});

it.each([-1, 0, 0.009])("Should return error", (purchasePrice) => {
	expect(() => calculateDiscount(purchasePrice)).toThrowError()
});
