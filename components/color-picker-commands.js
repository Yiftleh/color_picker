import { StyleSheet, View } from 'react-native';
import { InputColor } from './input-color';
import { SavedColors } from './saved-colors';
import { SaveColor } from './save-color';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const styles = StyleSheet.create({
	container: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		columnGap: 50,
	},
});

export const ColorPickerCommands = ({ colors, handlers }) => {
	const [savedColorsList, setSavedColorsList] = useState();
	const [isSaveButtonDisabled, setSaveButtonDisable] = useState(true);
	const [isColorListButtonDisabled, setColorListButtonDisable] = useState(true);

	const handleSaveColor = async () => {
		const colorToSave = {
			red: colors.red,
			green: colors.green,
			blue: colors.blue,
		};
		setSavedColorsList([...savedColorsList, colorToSave]);
		await AsyncStorage.setItem('savedColorsList', JSON.stringify(savedColorsList));
	};

	const handleDeleteSavedColor = async (colorToDelete) => {
		const colorList = savedColorsList.filter((savedColor) => {
			return savedColor.red === colorToDelete.red &&
				savedColor.green === colorToDelete.green &&
				savedColor.blue === colorToDelete.blue
				? false
				: true;
		});
		await AsyncStorage.setItem('savedColorsList', JSON.stringify(colorList));
		setSavedColorsList(colorList);
	};

	const handleUseSavedColor = (colorsToUse) => {
		handlers.red(colorsToUse.red);
		handlers.green(colorsToUse.green);
		handlers.blue(colorsToUse.blue);
	};

	useEffect(() => {
		let isColorSaved = false;
		savedColorsList &&
			savedColorsList.forEach((element) => {
				if (element.red === colors.red && element.green === colors.green && element.blue === colors.blue)
					isColorSaved = true;
			});
		setSaveButtonDisable(!savedColorsList || isColorSaved);
		setColorListButtonDisable(!savedColorsList || savedColorsList.length === 0);
	}, [savedColorsList, colors.red, colors.green, colors.blue]);

	useEffect(() => {
		const getColorsList = async () => {
			const savedColors = await AsyncStorage.getItem('savedColorsList');
			savedColors ? setSavedColorsList(JSON.parse(savedColors)) : setSavedColorsList([]);
		};
		getColorsList();
	}, []);

	return (
		<View style={styles.container}>
			<InputColor
				colors={colors}
				handlers={handlers}
			/>
			<SaveColor
				saveColor={handleSaveColor}
				isDisabled={isSaveButtonDisabled}
			/>
			<SavedColors
				useSavedColor={handleUseSavedColor}
				deleteColor={handleDeleteSavedColor}
				savedColors={savedColorsList}
				isDisabled={isColorListButtonDisabled}
			/>
		</View>
	);
};
