import { View, Text, Image, Dimensions, Pressable } from 'react-native'
import React, { FC, ReactElement, useEffect, useState } from 'react'

import placeholder from '../../assets/placeholder.jpg'
import { ImagesStyles } from '../styles';
import { ThumbPhoto } from './APIs/models/Images';

import 'react-native-url-polyfill/auto';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

interface Props {
    thumbsList: ThumbPhoto[]
}

const ImagesList: FC<Props> = ({thumbsList}) => {
    const size = Dimensions.get('window').width / 3 - 10;
    const {navigate} = useNavigation();

    return (
        <View style={ImagesStyles.container}>
            {thumbsList.map((item, index) => 
                <Pressable
                    onPress={() => navigate('FullSizeModal')}
                    key={index}
                    >
                    <Image 
                        style={Object.assign({width: size, height: size}, ImagesStyles.image)}
                        source={{uri: item.url}}
                    />
                </Pressable>
            )}
        </View>  
    )
}

export default ImagesList