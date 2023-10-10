import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
	mainModalContainer: {
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.75)',
	},
	modalContainer: {
		backgroundColor: '#a7a7a7',
		minHeight: 350,
		width: '80%',
		padding: 25,
		borderRadius: 25,
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},
});

export const InputColor = ({ colors, handlers }) => {
	const [modalVisibility, setModalVisibility] = useState(false);
	const [modalRedColor, setModalRedColor] = useState();
	const [modalGreenColor, setModalGreenColor] = useState();
	const [modalBlueColor, setModalBlueColor] = useState();

	const handleModalClose = () => {
		modalRedColor ? handlers.red(parseInt(modalRedColor)) : handlers.red(colors.red);
		modalGreenColor ? handlers.green(parseInt(modalGreenColor)) : handlers.green(colors.green);
		modalBlueColor ? handlers.blue(parseInt(modalBlueColor)) : handlers.blue(colors.blue);
		setModalRedColor(undefined);
		setModalGreenColor(undefined);
		setModalBlueColor(undefined);
		setModalVisibility(false);
	};

	return (
		<TouchableOpacity onPress={() => setModalVisibility(true)}>
			<Feather
				name='edit'
				size={30}
				color='#f0f0f0'
			/>
			<Modal
				transparent
				animationType='slide'
				visible={modalVisibility}>
				<View style={styles.mainModalContainer}>
					<View style={styles.modalContainer}>
						<Text
							numberOfLines={2}
							style={{ fontSize: 24, textAlign: 'center' }}>
							Please, enter the color code you want to try in RGB style.
						</Text>
						<View style={{ flexDirection: 'row', justifyContent: 'center', columnGap: 24 }}>
							<TextInput
								inputMode='numeric'
								placeholder={colors.red ? colors.red.toString() : '0'}
								placeholderTextColor='#a3a3a3'
								style={{ width: '25%', backgroundColor: '#733737', borderRadius: 25, fontSize: 24, color: 'white' }}
								value={modalRedColor}
								onChangeText={(value) => (parseInt(value) > 255 ? setModalRedColor('255') : setModalRedColor(value))}
								maxLength={3}
								textAlign='center'
							/>
							<TextInput
								inputMode='numeric'
								placeholder={colors.green ? colors.green.toString() : '0'}
								placeholderTextColor='#a3a3a3'
								style={{ width: '25%', backgroundColor: '#377337', borderRadius: 25, fontSize: 24, color: 'white' }}
								value={modalGreenColor}
								onChangeText={(value) =>
									parseInt(value) > 255 ? setModalGreenColor('255') : setModalGreenColor(value)
								}
								maxLength={3}
								textAlign='center'
							/>
							<TextInput
								inputMode='numeric'
								placeholder={colors.blue ? colors.blue.toString() : '0'}
								placeholderTextColor='#a3a3a3'
								style={{ width: '25%', backgroundColor: '#373773', borderRadius: 25, fontSize: 24, color: 'white' }}
								value={modalBlueColor}
								onChangeText={(value) => (parseInt(value) > 255 ? setModalBlueColor('255') : setModalBlueColor(value))}
								maxLength={3}
								textAlign='center'
							/>
						</View>
						<TouchableOpacity
							style={{ backgroundColor: '#373737', paddingVertical: 15, paddingHorizontal: 45, borderRadius: 50 }}
							onPress={handleModalClose}>
							<Text style={{ color: '#f0f0f0' }}>OK</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
		</TouchableOpacity>
	);
};
