import React from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {Text } from "native-base"
import { SafeAreaView } from "react-native";

import Like from "../components/pages/Like";
import Watched from "../components/pages/Watched";

const Swipe = createMaterialTopTabNavigator();

function Test() {
    return (
        <Text textAlign={"center"}>Not Implemented soorry :(</Text>
    )
}

export default function FavorNavigator() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Swipe.Navigator
                screenOptions={{
                    tabBarStyle: { backgroundColor: 'transparent' },
                    tabBarItemStyle: { height: 35 },
                }}
            >
                <Swipe.Screen name="Like" component={Like} />
                <Swipe.Screen name="Watched" component={Watched} />
                <Swipe.Screen name="Playlist" component={Test} />
            </Swipe.Navigator>
        </SafeAreaView>
    )
}