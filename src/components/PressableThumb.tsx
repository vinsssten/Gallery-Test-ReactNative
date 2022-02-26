import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react"
import { Pressable, Image } from "react-native"
import { ImagesStyles } from '../styles';

interface Props {
    id: string,
    uri: string,
    size: number
}

const PressableThumb: FC<Props> = ({id, uri, size}) => {
    const { navigate } = useNavigation();
    
    return (
        <Pressable
            onPress={() => navigate('FullSizeModal')}
            >
            <Image
                style={Object.assign({ width: size, height: size }, ImagesStyles.image)}
                source={{uri: uri}} />
        </Pressable>
    )
    
}

export default PressableThumb