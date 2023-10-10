import { View, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

const styles = StyleSheet.create({
	mainContainer: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	sliderContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		columnGap: 25,
	},
});

const sliderProps = {
	style: {
		minWidth: '80%',
		minHeight: 48,
	},
	step: 1,
	minimumValue: 0,
	maximumValue: 255,
};

export const ColorPicker = ({ colors, handlers }) => {
	return (
		<View style={styles.mainContainer}>
			<Slider
				{...sliderProps}
				value={colors.red}
				onValueChange={handlers.red}
				minimumTrackTintColor='#FF0000'
				maximumTrackTintColor='#770000'
			/>
			<Slider
				{...sliderProps}
				value={colors.green}
				onValueChange={handlers.green}
				minimumTrackTintColor='#00FF00'
				maximumTrackTintColor='#007700'
			/>
			<Slider
				{...sliderProps}
				value={colors.blue}
				onValueChange={handlers.blue}
				minimumTrackTintColor='#0000FF'
				maximumTrackTintColor='#000077'
			/>
		</View>
	);
};
