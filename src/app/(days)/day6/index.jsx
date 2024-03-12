import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { Audio } from 'expo-av';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons or any other icon library you prefer
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import MemoItem from '../../../components/MemoItem';

export default function App() {
  const [recording, setRecording] = useState();
  const [permissionResponse, requestPermission] = Audio.usePermissions();
  const [memos, setMemos] = useState([]);
  const { height } = Dimensions.get('window');
  const AnimatedMaterialIcon = Animated.createAnimatedComponent(MaterialCommunityIcons);
  const [sound, setSound] = useState()

  const iconSize = useSharedValue(40); // Initial size

  const startRecording = async () => {
    try {
      if (permissionResponse.status !== 'granted') {
        console.log('Requesting permission..');
        await requestPermission();
      }
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log('Starting recording..');
      const { recording } = await Audio.Recording.createAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY);
      setRecording(recording);

      // Animate the icon size to a larger value
      iconSize.value = withSpring(60);
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  };

  const stopRecording = async () => {
    console.log('Stopping recording..');
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
    const uri = recording.getURI();

    if (uri) {
      setMemos((prev) => [uri, ...prev]);
    }

    // Animate the icon size back to the initial value
    iconSize.value = withSpring(40);

    console.log('Recording stopped and stored at', uri);
  };


   useEffect(() => {
    return () => {
      // Clean up resources when the component is unmounted
    //   if (recording) {
    //     recording.stopAndUnloadAsync();
    //     Audio.setAudioModeAsync({
    //       allowsRecordingIOS: false,
    //     });
    //   }
    };
  }, [recording]);

  const playSound=async(uri)=>{
    try {
        const {sound}=await Audio.Sound.createAsync(
            {uri},
            {shouldPlay:true}
            
        );
        setSound(sound)
    } catch (error) {
        console.log("The error while playing sound is ",error)
        
    }
  }

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{
          paddingHorizontal: 16,
          marginVertical: 20,
          paddingBottom: 120,
        }}
        data={memos}
        renderItem={({item,index})=><MemoItem key={index} uri={item}
        playSound={playSound}/>}
        />
    
      

      <View
        className="absolute right-10 bottom-12"
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity
          onPress={recording ? stopRecording : startRecording}
          className={`w-14 h-14 ${!recording ? 'border-orange-600' : 'border-green-600'} rounded-full flex justify-center items-center border-2`}
        >
          {recording ? (
            <Animated.View>
              <AnimatedMaterialIcon name="record-circle" size={iconSize.value} color="green" />
            </Animated.View>
          ) : (
            <Ionicons name="mic" size={40} color="tomato" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});