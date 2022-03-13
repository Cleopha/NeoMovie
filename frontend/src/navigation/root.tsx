import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

import FilmProposal from '../components/pages/FilmProposal'
import FavorNavigator from './favor';
import Search from '../components/pages/Search';

const Tab = createBottomTabNavigator();

function RootNavigation(): JSX.Element {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ color }) => {
                    if (route.name === 'Search') {
                        return <MaterialIcons name="search" size={32} color={color} />;
                    } else if (route.name === 'Prefer') {
                        return <AntDesign name="switcher" size={32} color={color} />;
                    } else if (route.name === 'Home') {
                        return <AntDesign name="home" size={32} color={color} />
                    }
                },
            })}
        >
            <Tab.Screen name="Home" component={FilmProposal} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Prefer" component={FavorNavigator} />
        </Tab.Navigator>
    );
}

export default RootNavigation;