import { Platform, StatusBar, StyleSheet } from 'react-native';

export const MainViewStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#E5E5E5',
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

export const MainContentStyles = StyleSheet.create({
    container: {
        flex: 10,
    }
})

export const ImagesStyles = StyleSheet.create({
    image: {
        borderRadius: 5,
        margin: 5
    },
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})