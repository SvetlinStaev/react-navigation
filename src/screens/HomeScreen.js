import React from 'react';
import { Text, ScrollView } from 'react-native';

export default class HomeScreen extends React.Component {
	static navigationOptions = {
		headerTitle: 'Home Page',
	};

	render() {
		return (
			<ScrollView style={{ padding: 20 }}>
				<Text>Home page here</Text>
			</ScrollView>
		);
	}
}
