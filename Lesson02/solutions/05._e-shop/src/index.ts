function calculateDiscount(purchasePrice: number) {
	if (purchasePrice < 0.01) {
		throw Error();
	} else if (purchasePrice < 300.01) {
		return purchasePrice;
	} else if (purchasePrice < 800.01) {
		return purchasePrice -= purchasePrice * 0.05;
	} else {
		return purchasePrice -= purchasePrice * 0.10
	}
}

export {
	calculateDiscount
};
