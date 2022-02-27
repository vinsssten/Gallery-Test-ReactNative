import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GalleryComponent from '../Views/GalleryComponent';
import FavoriteComponent from '../Views/FavoriteComponent';
import FullSizeImage from '../Views/FullSizeImage';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const mainColor = '#9336AC'

export default function Navigation() {
    return (
        <NavigationContainer>
            <RootNavigator /> 
        </NavigationContainer>
    )
}

function RootNavigator () {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#790598',
            },
            headerTitleStyle: {
                fontWeight: 'bold',
                color: 'white'
            }
            
        }} >
                <Stack.Screen name='Root' component={BottomTabNavigator} options={{headerShown: false}}/>
                <Stack.Screen name='Gallery' component={GalleryComponent}/>
                <Stack.Screen name='Favorites' component={FavoriteComponent}/>
                <Stack.Group screenOptions={{presentation: 'modal'}}>
                    <Stack.Screen 
                        name='FullSizeModal' 
                        component={FullSizeImage}
                    />
                </Stack.Group>
            
        </Stack.Navigator>
    ) 
}

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator () {
    return (
        <BottomTab.Navigator 
        screenOptions={{
            headerStyle: {
                backgroundColor: mainColor,
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
                fontWeight: 'bold',
                color: 'white',
            },
        }}
            >
            <BottomTab.Screen name='Gallery' component={GalleryComponent}
                options={{
                    tabBarActiveTintColor: mainColor,
                    tabBarInactiveTintColor: 'gray',
                    tabBarIcon: ({ focused }) => <MaterialIcon name="photo-library" color={focused ? mainColor : 'gray'} />, 
                }}
            />
            <BottomTab.Screen name='Favorites' component={FavoriteComponent} 
                options={{
                    tabBarActiveTintColor: mainColor,
                    tabBarInactiveTintColor: 'gray',
                    tabBarIcon: ({ focused }) => <MaterialIcon name="star" color={focused ? mainColor : 'gray'} />, 
                }}
            />
        </BottomTab.Navigator>
    )
}

function MaterialIcon(props: {
    name: React.ComponentProps<typeof MaterialIcons>['name'];
    color: string;
}) {
    return <MaterialIcons size={30} style={{ marginBottom: -3 }} {...props} />;
}