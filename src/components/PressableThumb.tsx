import { useNavigation } from '@react-navigation/native';
import React, { FC, useEffect } from 'react';
import { Pressable, Image, Text } from 'react-native';
import { ImagesStyles } from '../styles';
import { useAppDispatch } from '../../App';
import {
    setCurrentPhotoId,
    clearCurrentPhotoId,
} from '../APIs/store/actionCreators/appActionCreators';
import useFavoritePhoto from '../APIs/hooks/useFavoritePhoto';

interface Props {
    id: string;
    uri: string;
    size: number;
}

const PressableThumb: FC<Props> = ({ id, uri, size }) => {
    const { isFavorite } = useFavoritePhoto(id);
    const { navigate } = useNavigation();
    const dispatch = useAppDispatch();

    function pressHandler() {
        dispatch(setCurrentPhotoId(id));
        navigate('FullSizeModal');
    }

    return (
        <Pressable onPress={pressHandler}>
            <Image
                style={Object.assign(
                    { width: size, height: size },
                    ImagesStyles.thumbImage,
                )}
                source={{ uri: uri }}
            />
            <Text style={ImagesStyles.favoriteFlag}>{isFavorite ? '❤' : ''}</Text>
        </Pressable>
    );
};

export default PressableThumb;
