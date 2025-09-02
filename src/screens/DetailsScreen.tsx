import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScreenProps } from '@/types/navigation'

const DetailsScreen: React.FC<ScreenProps> = ({navigation}) => {
  console.log('DetailsScreen navigation:', navigation);
  return (
    <View>
      <Text>DetailsScreen</Text>
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({})