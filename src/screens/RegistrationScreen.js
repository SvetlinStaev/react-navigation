import React from 'react';
import { View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-navigation';

class RegistrationScreen extends React.Component {
	static navigationOptions = {
		title: 'Register Account',
	};

	handlePress = () => this.props.navigation.navigate('UserAgreement');

	render() {
		return (
			<SafeAreaView style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
				<View>
					<Text>registration goes here</Text>
					<Button title="Read user agreement" onPress={this.handlePress} />
				</View>
			</SafeAreaView>
		);
	}
}

export default RegistrationScreen;
