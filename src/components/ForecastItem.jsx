import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import dayjs from 'dayjs'
import { BlurView } from 'expo-blur';

const ForecastItem = ({item}) => {
  return (
    <BlurView intensity={50}  className=" shadow-md rounded-md border-2   m-3 p-6 flex justify-center items-center overflow-hidden">
      <Text className="text-4xl text-white  relative">{Math.round(item?.main?.temp)} °</Text>
      <Text
      className="text-white"
      style={{
        
      }}>{dayjs(item.dt*1000).format('ddd ha')}</Text>
    </BlurView>
  )
}

export default ForecastItem

const styles = StyleSheet.create({})