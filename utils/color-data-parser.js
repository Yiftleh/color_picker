export const showRGB = (red, green, blue) => {
	return `RGBA: (${red}, ${green}, ${blue})`;
};

export const showHexCode = (red, green, blue) => {
	const redValue = red ? (red > 15 ? red.toString(16) : `0${red.toString(16)}`) : '00';
	const greenValue = green ? (green > 15 ? green.toString(16) : `0${green.toString(16)}`) : '00';
	const blueValue = blue ? (blue > 15 ? blue.toString(16) : `0${blue.toString(16)}`) : '00';

	return `HEX Code: #${redValue}${greenValue}${blueValue}`;
};

export const showHexNumber = (red, green, blue) => {
	const redValue = red ? (red > 15 ? red.toString(16) : `0${red.toString(16)}`) : '00';
	const greenValue = green ? (green > 15 ? green.toString(16) : `0${green.toString(16)}`) : '00';
	const blueValue = blue ? (blue > 15 ? blue.toString(16) : `0${blue.toString(16)}`) : '00';

	return `HEX Num: 0x${redValue}${greenValue}${blueValue}`;
};
