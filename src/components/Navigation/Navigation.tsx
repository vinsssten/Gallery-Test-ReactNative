import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GalleryComponent from '../Views/GalleryComponent';
import FavoriteComponent from '../Views/FavoriteComponent';
import FullSizeImage from '../Views/FullSizeImage';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <RootNavigator /> 
        </NavigationContainer>
    )
}

function RootNavigator () {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Root' component={BottomTabNavigator} options={{headerShown: false}}/>
            <Stack.Screen name='Gallery' component={GalleryComponent} />
            <Stack.Screen name='Favorites' component={FavoriteComponent}/>
            <Stack.Group screenOptions={{presentation: 'modal'}}>
                <Stack.Screen name='FullSizeModal' component={FullSizeImage}/>
            </Stack.Group>
        </Stack.Navigator>
    ) 
}

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator () {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen name='Gallery' component={GalleryComponent}/>
            <BottomTab.Screen name='Favorites' component={FavoriteComponent}/>
        </BottomTab.Navigator>
    )
}