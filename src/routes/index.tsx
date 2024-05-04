import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SCREENS} from '../utils/constants';
import Home from '../pages/home/Home';
import Detail from '../pages/detail/Detail';
import Complete from '../pages/complete/Complete';
import Create from '../pages/create/Create';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen
          name={SCREENS.HOME}
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name={SCREENS.COMPLETE} component={Complete} />
        <Stack.Screen name={SCREENS.CREATE} component={Create} />
        <Stack.Screen name={SCREENS.DETAIL} component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
