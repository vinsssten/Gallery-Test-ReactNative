import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GalleryComponent from '../Views/GalleryComponent';
import FavoriteComponent from '../Views/FavoriteComponent';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Gallery' component={GalleryComponent} />
                <Tab.Screen name='Favorites' component={FavoriteComponent}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}