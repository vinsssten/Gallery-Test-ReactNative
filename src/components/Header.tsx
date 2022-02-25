import { View, Text } from 'react-native'
import React from 'react'
import { HeaderStyles } from '../styles';

export default function Header() {
    return (
        <View style={HeaderStyles.container}>
            <Text>Header</Text>
        </View>
    )
}