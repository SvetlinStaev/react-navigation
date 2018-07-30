import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';

class ContactScreen extends React.Component {
	render() {
		return (
			<SafeAreaView
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<View>
					<Text>Contact us screen here</Text>
				</View>
			</SafeAreaView>
		);
	}
}

export default ContactScreen;
