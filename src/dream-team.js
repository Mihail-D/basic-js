module.exports = function createDreamTeam(members) {
	let newString = [];

	if (Array.isArray(members)) {
		for (let i of members) {
			if (typeof i === "string") {
				if (i.charAt(0) === " ") {
					i = i.replace(/\s/g, "");
				}
				newString.push(i.substring(0, 1).toUpperCase());
			} else {
				typeCheck = 1;
			}
		}
		return newString.sort().join("");
	} else {
		return false;
	}
};
