import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import store from './APIs/store/store';
import Navigation from './components/Navigation/Navigation';
import { MainViewStyles } from './styles';

const Tab = createBottomTabNavigator();

export default function MountComponent() {
    return (
        <Provider store={store}>
            <SafeAreaView style={MainViewStyles.container}>
                <Navigation />
            </SafeAreaView>
        </Provider>
    );
}
