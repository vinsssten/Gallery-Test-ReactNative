import { Platform, StatusBar, StyleSheet } from 'react-native';

export const MainViewStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
})

export const HeaderStyles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#790598'
    }
})