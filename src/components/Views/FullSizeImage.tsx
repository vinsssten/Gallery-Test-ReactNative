import React, { FC, useEffect, useState } from "react"
import { View, Text, Image, Dimensions } from 'react-native';
import { useAppSelector } from '../../../App';
import { useNavigation } from '@react-navigation/native';
import { FullSizeStyles } from '../../styles';
import useImages from '../../APIs/hooks/useImages';
import { RootState } from '../../APIs/store/store';

interface Props {
}

const FullSizeImage: FC<Props> = ({}) => {
    const [aspectRatio, setAspectRatio] = useState(1);
    const id = useAppSelector((state: RootState) => state.app.imageId);
    
    const { curPhoto, isLoadingPhoto, getPhotoById } = useImages();
    const navigation = useNavigation();
    
    const windowWidth = Dimensions.get('window').width;
    
    useEffect(() => {
        if (id) {
            navigation.setOptions({title: `${id}.jpg`});
            getPhotoById(id);
        }
    }, [id]);

    useEffect(() => {
        if (curPhoto) {
            setAspectRatio(curPhoto.width / curPhoto.height);
        }
    }, [curPhoto])

    return (
        <View style={FullSizeStyles.container}>
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
    )

}
export default FullSizeImage