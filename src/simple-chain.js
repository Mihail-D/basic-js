const chainMaker = {
	simpleChain: [],
	getLength() {
		this.simpleChain.length;
	},
	addLink(value) {
		let tmp = String(value);
		if (tmp.includes("function (")) tmp = tmp.replace("function (", "function(");
		this.simpleChain.push(String(tmp));
		return this;
	},
	removeLink(position) {
		if (typeof position !== "number" || position - 1 > this.simpleChain.length - 1 || position - 1 < 0) {
			this.simpleChain = [];
			throw new Error();
		}
		this.simpleChain.splice(position - 1, 1);
		return this;
	},
	reverseChain() {
		this.simpleChain = this.simpleChain.reverse();
		return this;
	},
	finishChain() {
		let output = this.simpleChain;
		for (let i = 0; i < output.length; i++) {
			output[i] = "( " + output[i] + " )";
		}
		this.simpleChain = [];
		return output.join("~~");
	},
};

module.exports = chainMaker;
