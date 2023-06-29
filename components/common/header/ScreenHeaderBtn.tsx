import React from 'react'
import { View, Text, Image, ImageSourcePropType } from 'react-native'

import styles from './screenheader.style'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SIZES } from '../../../constants'

const ScreenHeaderBtn = ({iconUrl,dimension,handlePress}:{iconUrl: ImageSourcePropType,dimension:string,handlePress?}) => {
  return (
   <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image source={iconUrl}
      resizeMode="cover"
      style={{
        width: dimension,
        height: dimension,
        borderRadius: SIZES.small / 1.25,
  }}
      />
   </TouchableOpacity>
  )
}

export default ScreenHeaderBtn