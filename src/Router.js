import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './Navigation/DrawerNavigation';

// Burada en dışı Navigation Container ile sarıyoruz ki navigation olayının en dış katmanı olarak da Drawerı belirliyoruz.

const Router = () => {
    return(
        <NavigationContainer>
            <DrawerNavigation />
        </NavigationContainer>
    )
}

export default Router;