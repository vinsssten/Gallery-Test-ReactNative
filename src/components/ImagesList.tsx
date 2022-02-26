import { View, Text, Image, Dimensions } from 'react-native'
import React, { FC, ReactElement, useEffect, useState } from 'react'

import placeholder from '../../assets/placeholder.jpg'
import { ImagesStyles } from '../styles';
import { ThumbPhoto } from './APIs/models/Images';

import 'react-native-url-polyfill/auto';

interface Props {
    thumbsList: ThumbPhoto[]
}

const ImagesList: FC<Props> = ({thumbsList}) => {
    const size = Dimensions.get('window').width / 3 - 10;
    
    return (
        <View style={ImagesStyles.container}>
            {thumbsList.map((item, index) => 
                <Image 
                    style={Object.assign({width: size, height: size}, ImagesStyles.image)}
                    source={{uri: item.url}}
                    key={index}
            />)}
        </View>  
    )
}

export default ImagesList