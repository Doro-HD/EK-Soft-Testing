function converter(romanInput) {
	let output;

	switch (romanInput) {
		case 'I':
			output = 1;
			break;
		case 'V':
			output = 5;
			break;
		case 'X':
			output = 10;
			break;
		case 'L':
			output = 50;
			break;
		case 'C':
			output = 100;
			break;
		case 'D':
			output = 500;
			break;
		case 'M':
			output = 1000;
			break;
		default:
			output = -1;
	}

	return output;
}

/**
 * @param {string} romanInput - The input to convert to decimal
 * @returns A decimal representation of the roman input, a wrongfull input will return -1
*/
function convertToDecimal(romanInput) {
	if (romanInput.length === 0) {
		return -1
	} else if (romanInput.length === 1) {
		return converter(romanInput)
	}

	const numerals = romanInput.split("");

	const decimals = numerals.map(numeral => {
		const number = converter(numeral)

		return { number, consumed: false }
	});

	if (decimals.includes({ numeral: -1, consumed: false })) {
		return -1;
	}

	let output = 0;

	decimals.forEach((decimal, i, decimals) => {
		if (decimal.consumed) {
			return;
		}

		const nextDecimal = decimals.at(i + 1);
		if (nextDecimal !== undefined) {
			if (decimal.number >= nextDecimal.number) {
				output += decimal.number;
			} else if (decimal.number < nextDecimal.number) {
				output += nextDecimal.number - decimal.number;
				nextDecimal.consumed = true;
			}
		} else {
			output += decimal.number;
		}
	})

	return output;
}

export const romanNumerals = {
	convertToDecimal
}

