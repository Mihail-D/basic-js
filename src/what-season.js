module.exports = function getSeason(date) {
	if (!date) return "Unable to determine the time of year!";
	if (!(date instanceof Date) || date.toString.toString() !== "function toString() { [native code] }")
		throw new Error();

	if (date === undefined) {
		return "Unable to determine the time of year!";
	} else if (typeof date.getMonth === "function") {
		let monthNumber = date.getMonth();
		let guesstMonth = "";
		if (monthNumber === 11 || monthNumber === 0 || monthNumber === 1) {
			guesstMonth += "winter";
		}
		if (monthNumber >= 2 && monthNumber <= 4) {
			guesstMonth += "spring";
		}
		if (monthNumber >= 5 && monthNumber <= 7) {
			guesstMonth += "summer";
		}
		if (monthNumber >= 8 && monthNumber <= 10) {
			guesstMonth += "autumn";
		}

		return guesstMonth;
	}
};
