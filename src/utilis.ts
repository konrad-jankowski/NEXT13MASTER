export const formatMoney = (amount: number) => {
	return new Intl.NumberFormat("PL", {
		style: "currency",
		currency: "PLN",
	}).format(amount);
};
