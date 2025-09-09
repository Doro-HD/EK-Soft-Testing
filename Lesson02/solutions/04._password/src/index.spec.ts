import { it, expect } from "vitest";
import { faker } from "@faker-js/faker";

import { isPasswordValid } from "./index";

// partitions
// valid 6-10
// invalid 1-5
// invalid 10-*
// invalid 0

function generatePassword(length: number) {
	return faker.internet.password({ length });
}

it.each([
	generatePassword(6),
	generatePassword(7),
	generatePassword(8),
	generatePassword(9),
	generatePassword(10),
])("Should return true for valid numbers", (password) => {
	const isValid = isPasswordValid(password);

	expect(isValid).toBe(true);
});

it.each(["", generatePassword(5), generatePassword(11), generatePassword(20)])("Should return false for invalid numbers", (password) => {
	const isValid = isPasswordValid(password);

	expect(isValid).toBe(false);
});
