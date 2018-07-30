import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';

class PrivacyPolicyScreen extends React.Component {
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
					<Text>Privacy policy screen here</Text>
				</View>
			</SafeAreaView>
		);
	}
}

export default PrivacyPolicyScreen;
