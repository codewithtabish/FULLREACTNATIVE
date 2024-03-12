import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Audio } from 'expo-av';

const MemoItem = ({ uri }) => {
  const [sound, setSound] = useState();
  const [isPlaying, setisPlaying] = useState(false)
  const progress=40



  async function loadSound(){

    const { sound } = await Audio.Sound.createAsync({
      uri
    },undefined,onPlaybackStatusUpdate,
    );
    setSound(sound);

  }

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);


  useEffect(() => {

    loadSound()
   
  }, [uri])


  
  async function playSound() {
    if(!sound){
      return
    }

      await sound.playAsync();

  

  }

  async function  onPlaybackStatusUpdate(status) {
    console.log("It is being Called ..")
    
  }
  



  return (
    <View className="shadow-md bg-gray-100 p-3 pb-4 mx-3 my-2 rounded-md">
      <View className="flex gap-2 items-center flex-row">
        <TouchableOpacity 
        onPress={playSound}
        >
          <FontAwesome5
            name={isPlaying ? 'pause' : 'play'}
            size={24}
            color="gray"
          />
        </TouchableOpacity>

        <View className="flex-1 bg-red-200 h-1">
          <View
            className="absolute w-3 h-3 bg-green-400 rounded-full bottom-0 -top-1"
            style={{left:`${progress}%`}}
            // style={{ left: `${(positionMillis / durationMillis) * 100}%` }}
          ></View>
        </View>
      </View>
      <View className="absolute right-3 mb-1 bottom-0">
        <Text className="text-[11px]">
          {/* {formatDuration(durationMillis)} */}
          </Text>
      </View>
    </View>
  );
};

export default MemoItem;

const styles = StyleSheet.create({});
