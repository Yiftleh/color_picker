import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: '#4c4c4c',
		width: '100%',
		borderRadius: 25,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	colorContainer: ({ red, green, blue }) => ({
		backgroundColor: `rgb(${red}, ${green}, ${blue})`,
		height: 75,
		width: '100%',
		marginBottom: 25,
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
	}),
	buttonsContainer: {
		color: '#f0f0f0',
		paddingBottom: 25,
		textAlignVertical: 'bottom',
		fontSize: 18,
	},
});

export const ColorPreview = ({ data, useAction, deleteAction }) => {
	return (
		<View style={styles.mainContainer}>
			<View style={styles.colorContainer(data.item)} />
			<View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}>
				<TouchableOpacity onPress={() => useAction(data.item)}>
					<Feather
						name='check-square'
						size={18}
						color='white'
					/>
				</TouchableOpacity>
				<Text style={styles.buttonsContainer}>
					RGB: ({data.item.red}, {data.item.green}, {data.item.blue})
				</Text>
				<TouchableOpacity
					onPress={() => {
						deleteAction(data.item);
					}}>
					<Feather
						name='delete'
						size={18}
						color='white'
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};
