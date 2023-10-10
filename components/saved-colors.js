import { Feather } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Modal, TouchableOpacity, View, Text, FlatList } from 'react-native';
import { ColorPreview } from './color-preview';

export const SavedColors = ({ useSavedColor, savedColors, isDisabled, deleteColor }) => {
	const [isModalActive, setModalVisibility] = useState(false);

	const handleUseSavedColor = (savedColor) => {
		useSavedColor(savedColor);
		setModalVisibility(false);
	};

	useEffect(() => {
		if (savedColors && savedColors.length === 0) setModalVisibility(false);
	}, [savedColors]);

	return (
		<TouchableOpacity
			onPress={() => setModalVisibility(true)}
			disabled={isDisabled}>
			<Modal
				animationType='slide'
				visible={isModalActive}
				transparent>
				<View
					style={{
						height: '100%',
						justifyContent: 'center',
						alignItems: 'center',
						backgroundColor: 'rgba(0, 0, 0, 0.75 )',
					}}>
					<View
						style={{
							backgroundColor: '#a7a7a7',
							maxHeight: '80%',
							width: '80%',
							borderRadius: 25,
							paddingVertical: 25,
							rowGap: 25,
							justifyContent: 'space-evenly',
							alignItems: 'center',
						}}>
						<View style={{ maxHeight: '80%', width: '80%' }}>
							<FlatList
								data={savedColors}
								ItemSeparatorComponent={<View style={{ height: 25 }} />}
								renderItem={(colorData) => (
									<ColorPreview
										data={colorData}
										useAction={handleUseSavedColor}
										deleteAction={deleteColor}
									/>
								)}
							/>
						</View>
						<TouchableOpacity
							onPress={() => setModalVisibility(false)}
							style={{ backgroundColor: '#373737', paddingVertical: 15, paddingHorizontal: 45, borderRadius: 50 }}>
							<Text style={{ color: '#f0f0f0' }}>Close</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
			<Feather
				name='list'
				size={30}
				color={isDisabled ? '#737373' : '#f0f0f0'}
			/>
		</TouchableOpacity>
	);
};
