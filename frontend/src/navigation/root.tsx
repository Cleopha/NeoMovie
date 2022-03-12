import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { ImageBackground, View } from 'react-native';

import { Text } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import FilmSuggestion from '../components/organisms/FilmSuggestion';
import FilmProposal from '../components/pages/FilmProposal'

function Test2() {
    return (
        <SafeAreaView
            style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}
        >
            <Text>This is top text.</Text>
            <Text>This is bottom text.</Text>
        </SafeAreaView>
    )
}

const Tab = createBottomTabNavigator();

function RootNavigation(): JSX.Element {
    return (
        <Tab.Navigator
            initialRouteName="Search"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: '#FF5964',
                tabBarIcon: ({ color }) => {
                    if (route.name === 'Search') {
                        return <MaterialIcons name="search" size={32} color={color} />;
                    } else if (route.name === 'Settings') {
                        return <MaterialIcons name="playlist-add" size={32} color={color} />;
                    } else if (route.name === 'Profile') {
                        return <AntDesign name="heart" size={32} color={color} />
                    }
                },
            })}
        >
            <Tab.Screen name="Search" component={Test2} />
            <Tab.Screen name="Profile" component={FilmProposal} />
            <Tab.Screen name="Settings" component={Test2} />
        </Tab.Navigator>
    );
}

export default RootNavigation;