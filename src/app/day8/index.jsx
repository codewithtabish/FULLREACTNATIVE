import { ActivityIndicator, FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import * as Location from 'expo-location';
import ForecastItem from '../../components/ForecastItem';
import LottieView from 'lottie-react-native';




const OPEN_WEATHER_KEY=process.env.EXPO_PUBLIC_OPEN_WEATHER_KEY

const BASE_URL=`https://api.openweathermap.org/data/2.5/weather`
const BASE_URL_Forcast=`https://api.openweathermap.org/data/2.5`


const index = () => {
    const [weather, setWeather] = useState()
      const [location, setLocation] = useState(null);
      const [errorMsg, setErrorMsg] = useState(null);
      const [forecast, setforecast] = useState()
        const animation = useRef(null);



    
    useEffect(() => {
      if(location){
        
        fetchData()
        fetchForeCast()
      }

     
    }, [location])



    useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

    


    const fetchData=async()=>{
      
      if(!location){
        return
      }
      const lat=location.coords.latitude
      const long=location.coords.longitude
      const url=`${BASE_URL}?lat=${lat}&lon=${long}&appid=${OPEN_WEATHER_KEY}&units=metric`
        const response=await fetch(url)
        const lastResponse=await response.json()
        setWeather(lastResponse)
    }

    const fetchForeCast=async()=>{
    try {
        const url=`${BASE_URL_Forcast}/forecast?lat=${location.coords.latitude}&lon=${location
        .coords.longitude}&appid=${OPEN_WEATHER_KEY}&units=metric`
  
        const response=await fetch(url)
        const lastResponse=await response.json()
        setforecast(lastResponse)
    } catch (error) {
       console.log("The weather forcast error is",error)
      
    }

    }


    if(!weather){
        return <ActivityIndicator/>
    }

    if(errorMsg){
      <View className="flex-1 flex justify-center items-center">
        <ActivityIndicator/>
      </View>
    }




 

    
    
  return (
    <ImageBackground source={{uri:"https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=600"}} className="flex  flex-1 relative cover-full justify-center items-center ">
        <View className="absolute left-0 right-0 bottom-0 top-0 z-2"
        style={{backgroundColor:"rgba(0,0,0,.7)"}}></View>
   
      
      <View className="flex flex-col items-center   flex-1  justify-center  ">
             <View className="flex justify-center ite">
              <LottieView
          className="flex justify-center items-center"
        autoPlay
           source={weather?.main[0]==='Rain'?require('../../../assets/lottie/rain.json'):require('../../../assets/lottie/lottiejson.json')}
        ref={animation}
        style={{
          width: 140,
          height: 140,
          // backgroundColor: '#eee',
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
     
      />
        </View>
        <Text className="text-white text-xl ">{weather?.name}</Text>
        <Text className=" text-white font-bold py-5 "
        style={{
          fontSize:80
        }}>{Math.round(weather?.main?.temp)}  °</Text>
      

      </View>

        <FlatList
        contentContainerStyle={{
          // gap:20,
        }}
        horizontal
        className="flex-grow-0 h-1/4"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={forecast?.list}
        renderItem={({item,index})=><ForecastItem key={index} item={item}/>
      }
        />
      
      
    </ImageBackground>
  )
}

export default index

const styles = StyleSheet.create({})