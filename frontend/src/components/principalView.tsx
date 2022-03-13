import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RootNavigation from '../navigation/root';

export default function PrincipalView(): JSX.Element {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <RootNavigation />
            </NavigationContainer>
        </SafeAreaProvider>
    );
}