import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'


const index = () => {
  return (
    <View>
      <Stack.Screen options={{title:"OnBoarding Screen"}}/>
      <Text className="text-sm m-0 text-green-600">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, esse.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi cupiditate ipsa quae suscipit voluptatibus a fugiat! Omnis quae earum repellat repellendus deleniti dolore. Cupiditate, repellat maxime error quia similique nisi!
        DAY 2
      </Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})