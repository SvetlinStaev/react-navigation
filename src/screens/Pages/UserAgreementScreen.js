import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';

class UserAgreementScreen extends React.Component {
	static navigationOptions = {
		headerTitle: 'User Agreement',
	};

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
					<Text>User agreement screen here</Text>
				</View>
			</SafeAreaView>
		);
	}
}

export default UserAgreementScreen;
