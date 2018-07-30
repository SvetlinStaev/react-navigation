import { createBottomTabNavigator } from 'react-navigation';

import HomeStack from './stacks/HomeStackNavigator';
import RegisterStack from './stacks/RegisterStackNavigator';

const tabNavigator = createBottomTabNavigator({
	Home: HomeStack,
	Register: RegisterStack,
});

export default tabNavigator;
