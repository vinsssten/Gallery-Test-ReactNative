import React, { FC, useEffect, useState } from "react"
import { View, Text, Image, Dimensions, Button } from 'react-native';
import { useAppSelector } from '../../../App';
import { useNavigation } from '@react-navigation/native';
import { FullSizeStyles } from '../../styles';
import useImages from '../../APIs/hooks/useImages';
import { RootState } from '../../APIs/store/store';
import { TouchableOpacity } from "react-native-gesture-handler";
import useFavoritePhoto from '../../APIs/hooks/useFavoritePhoto';
import useMemo from 'react';

interface Props {
}

const FullSizeImage: FC<Props> = ({}) => {
    const [aspectRatio, setAspectRatio] = useState<number>(1);
    const id = useAppSelector((state: RootState) => state.app.imageId);
    const favoriteList = useAppSelector(state => state.favorite.favoriteIdsList);
    
    const { curPhoto, isLoadingPhoto, getPhotoById } = useImages();
    const { isFavorite, isFavoritePhoto, favoritePhoto } = useFavoritePhoto(id ?? undefined);
    const navigation = useNavigation();
    
    const windowWidth = Dimensions.get('window').width;
    
    useEffect(() => {
        if (id) {
            console.log('open new full size');
            navigation.setOptions({title: `${id}.jpg`, tabBarVisible: false});
            getPhotoById(id);
            isFavoritePhoto(id);
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