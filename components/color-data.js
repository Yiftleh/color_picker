import { View, Text, StyleSheet } from 'react-native';
import { showRGB, showHexCode, showHexNumber } from '../utils/color-data-parser';

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		rowGap: 18,
		marginVertical: 18,
	},
	text: {
		color: '#f0f0f0',
		fontSize: 18,
	},
});

export const ColorData = ({ colors }) => {
	const { red, green, blue } = colors;
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{showRGB(red, green, blue)}</Text>
			<Text style={styles.text}>{showHexCode(red, green, blue)}</Text>
			<Text style={styles.text}>{showHexNumber(red, green, blue)}</Text>
		</View>
	);
};
