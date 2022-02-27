import { useNavigation } from "@react-navigation/native";
import React, { FC, useEffect } from "react"
import { Pressable, Image } from "react-native"
import { ImagesStyles } from '../styles';
import { useAppDispatch } from '../../App';
import { setCurrentPhotoId, clearCurrentPhotoId } from '../APIs/store/actionCreators/appActionCreators';

interface Props {
    id: string,
    uri: string,
    size: number
}

const PressableThumb: FC<Props> = ({id, uri, size}) => {
    const { navigate } = useNavigation();
    const dispatch = useAppDispatch();

    function pressHandler () {
        dispatch(setCurrentPhotoId(id));
        navigate('FullSizeModal');
    }
    
    return (
        <Pressable
            onPress={ pressHandler }
            >
            <Image
                style={Object.assign({ width: size, height: size }, ImagesStyles.thumbImage)}
                source={{uri: uri}} />
        </Pressable>
    )
    
}

export default PressableThumb