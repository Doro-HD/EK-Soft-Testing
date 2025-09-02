import { describe, it } from "vitest";
import { calculator } from ".";
import { expect } from "vitest";

// test negative numbers as well
// since js is a weakly typed language you should test different data types as well

describe('Sum', () => {
	it('Should add 1 to 1', () => {
		const sum = calculator.sum(1, 1);

		expect(sum).toBe(2);
	});
});

describe('Subtract', () => {
	it('Should subtract 1 from 1', () => {
		const result = calculator.subtract(1, 1);

		expect(result).toBe(0);
	});
});

describe('Multiple', () => {
	it('Should multiply 1 by 1', () => {
		const result = calculator.multiple(1, 1);

		expect(result).toBe(1);
	});
});

// divition by zero would have been good here as well
describe('Divide', () => {
	it('Should divide 1 by 1', () => {
		const result = calculator.divide(1, 1);

		expect(result).toBe(1)
	})
});
