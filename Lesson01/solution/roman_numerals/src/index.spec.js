import { describe, it, expect } from "vitest";
import { romanNumerals } from "./src";

describe('Single numeral', () => {
	it('Should convertt I to 1', () => {
		const result = romanNumerals.convertToDecimal('I');

		expect(result).toBe(1);
	});

	it('Should convert V to 5', () => {
		const result = romanNumerals.convertToDecimal('V');

		expect(result).toBe(5);
	});

	it('Should convert X to 10', () => {
		const result = romanNumerals.convertToDecimal('X');

		expect(result).toBe(10);
	});

	it('Should convert L to 50', () => {
		const result = romanNumerals.convertToDecimal('L');

		expect(result).toBe(50);
	});

	it('Should convert C to 100', () => {
		const result = romanNumerals.convertToDecimal('C');

		expect(result).toBe(100);
	});

	it('Should convert D to 500', () => {
		const result = romanNumerals.convertToDecimal('D');

		expect(result).toBe(500);
	});

	it('Should convert M to 1000', () => {
		const result = romanNumerals.convertToDecimal('M');

		expect(result).toBe(1000);
	});
})

describe('Multiple numerals', () => {
	it('Should add I to I', () => {
		const result = romanNumerals.convertToDecimal('II');

		expect(result).toBe(2);
	});


	it('Should subtract I from X', () => {
		const result = romanNumerals.convertToDecimal('IX');

		expect(result).toBe(9);
	})
})
