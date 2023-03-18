import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigation from './StackNavigation'; // Olusturdugumuz stack yapıdaki navigation yapısı. Ana Navigation burası olacağı için çağırdık.
import FavoriteScreen from '../pages/FavoriteScreen';

/*  Yandan açılır menü  */

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
    return(
        <Drawer.Navigator screenOptions={{ headerShown: false }} >
            <Drawer.Screen name='StackNavigation' component={StackNavigation} />
            <Drawer.Screen name='FavoriteScreen' component={FavoriteScreen} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation;