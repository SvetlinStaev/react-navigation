import { createStackNavigator } from 'react-navigation';

import RegistrationScreen from '../../screens/RegistrationScreen';

const RegisterStackNavigator = createStackNavigator({
	Registration: RegistrationScreen,
});

export default RegisterStackNavigator;
