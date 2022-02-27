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
    thumbImage: {
        borderRadius: 5,
        margin: 5
    },
    favoriteFlag: {
        fontSize: 18,
        position: 'absolute',
        marginLeft: '10%',
        marginTop: '70%',
    },
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    
})

export const FullSizeStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    imageContainer: {
        flex: 6,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    buttonsContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column'

    },
    fullSizeImage: {
        // width: '100%',
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        backgroundColor: 'white',
        borderColor: '#d3d3d3',
        borderWidth: 1
    }

})