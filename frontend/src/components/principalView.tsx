import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from '../navigation/root';



export default function PrincipalView(): JSX.Element {
    return (
        <NavigationContainer>
            <RootNavigation/>
        </NavigationContainer>
    );
}