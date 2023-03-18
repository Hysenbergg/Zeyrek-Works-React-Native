import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../pages/HomeScreen';
import DetailScreen from '../pages/DetailScreen';

/*  Stack Navigation Yapisi  */

const Stack = createNativeStackNavigator();

function StackNavigation() {
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='DetailScreen' component={DetailScreen} />
        </Stack.Navigator>    
    )
}

export default StackNavigation;