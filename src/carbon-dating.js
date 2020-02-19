const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
	let sampleActivityToInt = parseFloat(sampleActivity);

	if (!sampleActivity || typeof sampleActivity !== "string" || isNaN(Number.parseFloat(sampleActivity))) {
		return false;
	}

	if (sampleActivityToInt <= 0 || sampleActivityToInt >= 15) {
		return false;
	}

	let logOfTwo = 0.693;
	let coefficient = logOfTwo / HALF_LIFE_PERIOD;
	let carbonDating = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityToInt) / coefficient);

	return carbonDating;
};
