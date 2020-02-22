module.exports = function transform(arr) {
	let newArray = [];
	if (arr.length < 1) {
		return [];
	}
	if (!(arr instanceof Array)) throw new Error();

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == "--discard-next") {
			++i;
		} else if (arr[i] == "--discard-prev") {
			if (newArray.length > 0) {
				newArray = newArray.slice(0, newArray.length - 1);
			}
		} else if (arr[i] == "--double-next") {
			if (++i < arr.length) {
				newArray.push(arr[i]);
				newArray.push(arr[i]);
			}
		} else if (arr[i] == "--double-prev") {
			if (i > 0) newArray.push(arr[i - 1]);
		} else newArray.push(arr[i]);
	}
	return newArray;
};
