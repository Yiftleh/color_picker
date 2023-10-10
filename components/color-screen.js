import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	colorScreen: (redValue, greenValue, blueValue) => ({
		minHeight: 200,
		minWidth: '80%',
		backgroundColor: `rgb(${redValue}, ${greenValue}, ${blueValue})`,
		borderRadius: 50,
	}),
	colorScreenContainer: {
		padding: 10,
		backgroundColor: '#acacac73',
		borderRadius: 50,
	},
});

export const ColorScreen = (props) => {
	const { red, green, blue } = props.colors;

	return (
		<View style={styles.colorScreenContainer}>
			<View style={styles.colorScreen(red, green, blue)} />
		</View>
	);
};
