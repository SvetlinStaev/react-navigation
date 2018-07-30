import { createBottomTabNavigator } from 'react-navigation';

import HomeStack from './stacks/HomeStackNavigator';
import LoginStack from './stacks/LoginStackNavigator';

const tabNavigator = createBottomTabNavigator({
	HomeStack,
	LoginStack,
});

export default tabNavigator;
