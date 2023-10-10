import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export const SaveColor = ({ saveColor, isDisabled }) => {
	return (
		<TouchableOpacity
			onPress={saveColor}
			disabled={isDisabled}>
			<Entypo
				name='save'
				size={30}
				color={isDisabled ? '#737373' : '#f0f0f0'}
			/>
		</TouchableOpacity>
	);
};
