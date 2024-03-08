import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {Link} from 'expo-router'
import DayListItem from '../components/DayListItem'
import { useFonts } from 'expo-font';
import * as MySplashScreen from 'expo-splash-screen';


MySplashScreen.preventAutoHideAsync();


const HomeScreen = () => {

       const [fontsLoaded, fontError] = useFonts({
    'outfit': require('../../assets//fonts/Outfit-Regular.ttf'),
    'outfit-semi': require('../../assets/fonts/Outfit-SemiBold.ttf'),
    'outfit-bold': require('../../assets/fonts/Outfit-Bold.ttf'),
  });
      const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded || fontError) {
      await MySplashScreen.hideAsync();
    }
    setTimeout(() => {
   
    
    }, 3000); // 3 seconds delay
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
 

  return (
    <View className='flex-1' 
    onLayout={onLayoutRootView}>
    <Text className="text-sm text-light-lightPrimary m-4 shadow-md "
    style={{
      fontFamily:"outfit"

    }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, minima?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      </Text>
    
 

    <DayListItem/>
    </View>
  )
}

export default HomeScreen
