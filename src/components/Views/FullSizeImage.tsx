import React, { FC, useEffect, useState } from "react"
import { View, Text, Image, Dimensions, Button } from 'react-native';
import { useAppSelector } from '../../../App';
import { useNavigation } from '@react-navigation/native';
import { FullSizeStyles } from '../../styles';
import useImages from '../../APIs/hooks/useImages';
import { RootState } from '../../APIs/store/store';
import { TouchableOpacity } from "react-native-gesture-handler";

interface Props {
}

const FullSizeImage: FC<Props> = ({}) => {
    const [aspectRatio, setAspectRatio] = useState<number>(1);
    const [isFavoriteState, setIsFavoriteState] = useState<boolean>(false);
    const id = useAppSelector((state: RootState) => state.app.imageId);
    
    const { curPhoto, isLoadingPhoto, isFavorite, getPhotoById, favoritePhoto } = useImages();
    const navigation = useNavigation();
    
    const windowWidth = Dimensions.get('window').width;
    
    useEffect(() => {
        if (id) {
            navigation.setOptions({title: `${id}.jpg`, tabBarVisible: false});
            getPhotoById(id);
        }
    }, [id]);

    useEffect(() => {
        if (curPhoto) {
            setAspectRatio(curPhoto.width / curPhoto.height);
        }
    }, [curPhoto]);

    function pressHandler () {
        favoritePhoto(id);
    }

    return (
        <View style={FullSizeStyles.mainContainer}>
            <View style={FullSizeStyles.imageContainer}>
                {isLoadingPhoto && curPhoto ?
                    <Text>Loading...</Text>
                    :
                    <Image 
                        style={{
                            aspectRatio: aspectRatio,
                            width: windowWidth
                        }}
                        source={{uri: curPhoto?.uri}} 
                    />
                }
            </View>
            <View style={FullSizeStyles.buttonsContainer}>
                <TouchableOpacity
                    onPress={pressHandler}>
                    <View 
                        style={Object.assign({borderTopStartRadius: 20}, FullSizeStyles.button)}>
                        <Text>{!isFavorite ? 'Add to favorite ❤' : 'Remove from favorite 💔'}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {favoritePhoto(id)}}>
                    <View 
                        style={Object.assign({borderBottomEndRadius: 5}, FullSizeStyles.button)}>
                        <Text>Delete image from list</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )

}
export default FullSizeImage