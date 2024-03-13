import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'



const OPEN_WEATHER_KEY=process.env.EXPO_PUBLIC_OPEN_WEATHER_KEY

const BASE_URL=`https://api.openweathermap.org/data/2.5/weather`


const index = () => {
    const [weather, setWeather] = useState()


    
    useEffect(() => {

      fetchData()
     
    }, [])

    


    const fetchData=async()=>{
      const lat=34.190923
      const long=72.050647
      const url=`${BASE_URL}?lat=${lat}&lon=${long}&appid=${OPEN_WEATHER_KEY}&units=metric`
        const response=await fetch(url)
        const lastResponse=await response.json()
        console.log(lastResponse)
        setWeather(lastResponse)
    }


    if(!weather){
        return <ActivityIndicator/>
    }


    
    
  return (
    <View className="flex flex-1 justify-center items-center bg-white">
      <View className="flex flex-col items-center gap-2 ">
        <Text className="text-black text-xl ">{weather?.name}</Text>
        <Text className="text-5xl text-gray-800 font-bold py-5">{Math.round(weather?.main?.temp)}  °</Text>

      </View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})