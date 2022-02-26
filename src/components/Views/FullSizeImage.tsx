import React, { FC } from "react"
import { View, Text } from "react-native"

interface Props {
    id: string,
    uri: string
}

const FullSizeImage: FC<Props> = ({id}) => (
    <View>
        <Text>
            Full Size Image, Id: {id}
        </Text>
    </View>
)

export default FullSizeImage