import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ImagesList from '../ImagesList';
import useImages from '../APIs/hooks/useImages';



export default function GalleryComponent() {
    const { thumbsList, isLoadingThumbs, getThumbs } = useImages();

    useEffect(() => {
        getThumbs();
    }, [])

    if (thumbsList.length < 0) {
        return (
            <Text>Loading...</Text>
        )
    } else {
        return (
            <ScrollView>
                <ImagesList thumbsList={thumbsList} />
            </ScrollView>
        )
    }
}