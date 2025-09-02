interface IDiscount { isOrderValid: boolean; finalPrice: number };

const catrigePrice = 5;

function calculateDiscount(amount: number): IDiscount {
	if (amount < 5) {
		return { isOrderValid: false, finalPrice: 0 };
	}

	const price = amount * catrigePrice;

	if (amount >= 100) {

		return { isOrderValid: true, finalPrice: price - price * 0.2 };
	}

	return { isOrderValid: true, finalPrice: price };
}

export {
	calculateDiscount,
	catrigePrice
};
