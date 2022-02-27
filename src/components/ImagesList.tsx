import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { Dimensions, Image, Pressable, View } from 'react-native';
import { ImagesStyles } from '../styles';
import { ThumbPhoto } from '../APIs/models/Images';
import PressableThumb from './PressableThumb';


interface Props {
    thumbsList: ThumbPhoto[]
}

const ImagesList: FC<Props> = ({thumbsList}) => {
    const numbPicsInRow = 3
    const size = Dimensions.get('window').width / numbPicsInRow - 10;

    return (
        <View style={ImagesStyles.container}>
            {thumbsList.map((item, index) => 
                <PressableThumb 
                    id={item.id}
                    uri={item.url}
                    size={size}
                    key={index}
                />
            )}
        </View>  
    )
}

export default ImagesList