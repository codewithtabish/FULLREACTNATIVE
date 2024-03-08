import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {Link} from 'expo-router'
import DayListItem from '../components/DayListItem'

const index = () => {

  return (
    <>
    <Text className="text-sm text-green-800 m-4 shadow-md">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, minima?
      </Text>
    <DayListItem/>
    </>
  )
}

export default index

const styles = StyleSheet.create({})