import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ColorScreen } from './components/color-screen';
import { ColorPicker } from './components/color-picker';
import { ColorData } from './components/color-data';
import { ColorPickerCommands } from './components/color-picker-commands';

const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: '#373737',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
	mainTitle: {
		color: '#f0f0f0',
		fontSize: 36,
		textAlign: 'center',
		paddingVertical: 18,
	},
	topBar: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		paddingHorizontal: 50,
	},
});

export default function App() {
	const [redValue, setRedValue] = useState(0);
	const [greenValue, setGreenValue] = useState(0);
	const [blueValue, setBlueValue] = useState(0);
	const [colorsValues, setColorsValues] = useState({
		red: redValue,
		green: greenValue,
		blue: blueValue,
	});
	const colorsChangeHandlers = {
		red: (newValue) => setRedValue(newValue),
		green: (newValue) => setGreenValue(newValue),
		blue: (newValue) => setBlueValue(newValue),
	};

	useEffect(() => {
		setColorsValues({
			red: redValue,
			green: greenValue,
			blue: blueValue,
		});
	}, [redValue, greenValue, blueValue]);

	return (
		<SafeAreaView style={styles.mainContainer}>
			<Text style={styles.mainTitle}>Color Code App</Text>
			<ColorScreen colors={colorsValues} />
			<ColorPickerCommands
				colors={colorsValues}
				handlers={colorsChangeHandlers}
			/>
			<ColorPicker
				colors={colorsValues}
				handlers={colorsChangeHandlers}
			/>
			<ColorData colors={colorsValues} />
			<StatusBar
				style='inverted'
				translucent={false}
			/>
		</SafeAreaView>
	);
}
