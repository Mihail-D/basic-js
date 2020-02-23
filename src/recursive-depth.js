module.exports = class DepthCalculator {
	constructor() {
		this.maxDepth = 1;
		this.depthCounter = 1;
	}
	calculateDepth(arr) {
		if (!arguments[1]) {
			this.depthCounter = 1;
			this.maxDepth = 1;
		}
		arr.forEach(element => {
			if (Array.isArray(element)) {
				this.depthCounter++;
				this.calculateDepth(element, true);
			}
		});
		this.maxDepth = this.depthCounter > this.maxDepth ? this.depthCounter : this.maxDepth;
		this.depthCounter--;
		return this.maxDepth;
	}
};
