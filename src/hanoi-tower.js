module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const turnCount = 2 ** disksNumber - 1;
	const turnSpeedInSeconds = turnsSpeed / 3600;
    
	return { turns: turnCount, seconds: turnCount / turnSpeedInSeconds };
};
