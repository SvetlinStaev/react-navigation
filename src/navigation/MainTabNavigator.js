import { createBottomTabNavigator } from 'react-navigation';

import HomeStack from './stacks/HomeStackNavigator';
import RegisterStack from './stacks/RegisterStackNavigator';

const tabNavigator = createBottomTabNavigator({
	HomeStack,
	RegisterStack,
});

export default tabNavigator;
