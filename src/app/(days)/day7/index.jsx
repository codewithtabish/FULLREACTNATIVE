import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TinderCard from '../../../components/TinderCard'
import { tenderUsers } from '../../../utils/data'

const index = () => {
  return (
    <View className="flex justify-center items-center flex-1 bg-white">
            <View>
                {
                    tenderUsers?.map((item,index)=>{
                        return (
                                <TinderCard  user={item} key={index}
                                numOfCards={tenderUsers.length} currentIndex={index}/>
                        )
                    })
                }

            </View>
  
    </View>
  )
}

export default index

const styles = StyleSheet.create({})