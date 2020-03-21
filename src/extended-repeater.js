module.exports = function repeater(str,options)
{
	if (typeof str !== 'string')
	{
		str = String(str);
	}
	if (options.separator === undefined)
	{
		options.separator = '+';
	}
	if (options.additionRepeatTimes === undefined)
	{
		options.additionRepeatTimes = 1;
	}
	if (options.additionSeparator === undefined)
	{
		options.additionSeparator = '';
	}
	if (options.addition === undefined)
	{
		options.additionRepeatTimes = 0;
	}
	if (options.repeatTimes === undefined)
	{
		options.repeatTimes = 1;
	}

	let resultString = '';
	for (let i = 0; i < options.repeatTimes; i++)
	{
		resultString = resultString + str;
		for (let k = 0; k < options.additionRepeatTimes; k++)
		{
			resultString = resultString + options.addition;
			if (k + 1 !== options.additionRepeatTimes)
				resultString = resultString + options.additionSeparator;
		}
		if (i + 1 !== options.repeatTimes)
			resultString = resultString + options.separator;
	}
	return resultString;
};
