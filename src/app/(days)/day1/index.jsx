import { StyleSheet, Text, View } from 'react-native'
import {Stack} from 'expo-router'
import React from 'react'


const index = () => {
  return (
    <View>
      <Stack.Screen options={{title:"Day1"}}/>
      <Text className=" text-sm text-light-lightPrimary"
      style={{
      }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, ducimus?
        DAY ONE
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime amet ullam cupiditate, eaque quos quibusdam ab corporis placeat porro explicabo laboriosam eveniet cum nisi dolorem, ducimus eligendi distinctio necessitatibus est!

      </Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})

