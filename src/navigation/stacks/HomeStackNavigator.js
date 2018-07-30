import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../../screens/HomeScreen';
import ContactScreen from '../../screens/Pages/ContactScreen';
import UserAgreementScreen from '../../screens/Pages/UserAgreementScreen';
import PrivacyPolicyScreen from '../../screens/Pages/PrivacyPolicyScreen';

const HomeStack = createStackNavigator({
	Home: HomeScreen,
	Contact: ContactScreen,
	UserAgreement: UserAgreementScreen,
	PrivacyPolicy: PrivacyPolicyScreen,
});

export default HomeStack;
