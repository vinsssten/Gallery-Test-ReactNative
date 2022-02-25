import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import Header from './components/Header'
import { MainViewStyles } from './styles';

export default function MountComponent() {
	return (
		<SafeAreaView style={MainViewStyles.container}>
			<Header />
		</SafeAreaView>
	)
}