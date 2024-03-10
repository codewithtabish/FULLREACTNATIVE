import React, { useEffect } from 'react';
import { Image, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import { Stack } from 'expo-router';
import Animated, { FadeIn, SlideInLeft } from 'react-native-reanimated';
import { socialMediaOnboardingScreens } from '../../../utils/data';
import { AntDesign } from '@expo/vector-icons';

const OnboardingScreen = () => {
  const [currentItemIndex, setCurrentItemIndex] = React.useState(0);
  const { width, height } = Dimensions.get('window');
  const [swiped, setSwiped] = React.useState(false);

  const handleGesture = (event: PanGestureHandlerGestureEvent) => {
    const { translationX, state } = event.nativeEvent;

    if (state === State.END) {
      const swipeThreshold = width * 0.25;

      if (translationX > swipeThreshold && currentItemIndex > 0) {
        setCurrentItemIndex((prevIndex) => prevIndex - 1);
        setSwiped(true);
      } else if (translationX < -swipeThreshold && currentItemIndex < socialMediaOnboardingScreens.length - 1) {
        setCurrentItemIndex((prevIndex) => prevIndex + 1);
        setSwiped(true);
      }
    }
  };

  const handleSwipePress = () => {
    // Simulate a swipe to the right when the arrow button is pressed
    setCurrentItemIndex((prevIndex) => (prevIndex < socialMediaOnboardingScreens.length - 1 ? prevIndex + 1 : prevIndex));
    setSwiped(true);
  };

  useEffect(() => {
    // Trigger animations when the component mounts or when a swipe occurs
    if (swiped) {
      // handleSwipePress()
      // handleGesture()
      // Your animation logic here
      // For example:
      // Animated..start();
      setSwiped(false); // Reset the swiped state
    }
  }, [swiped]);

  const currentItem = socialMediaOnboardingScreens[currentItemIndex];

  return (
    <PanGestureHandler onGestureEvent={handleGesture} onHandlerStateChange={handleGesture}>
      <View className='flex-1 justify-center items-center bg-white'>
        <Stack.Screen options={{ title: 'OnBoarding Screen' }} />
        <View>
          <Animated.Image
            onLoad={() => setSwiped(true)} // Ensure the initial animation when the component mounts
            entering={SlideInLeft.duration(1000)}
            source={currentItem.image}
            style={{ width: width, height: height / 2 }}
            className='h-20 w-full'
          />
          <View className='mx-4'>
            <Animated.Text entering={FadeIn.delay(1000)} className='text-2xl my-1' style={{ fontFamily: 'outfit-bold', letterSpacing: 2 }}>
              {currentItem?.title}
            </Animated.Text>
            <Animated.Text entering={SlideInLeft.duration(2000)} className='my-1 max-w-[80%] text-[16px] italic text-gray-400' style={{ fontFamily: 'outfit', lineHeight: 25 }}>
              {currentItem?.subtitle}
            </Animated.Text>
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 5,
            top: height * 0.8,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
              position: 'absolute',
              top: -5,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            {socialMediaOnboardingScreens.map((item, index) => (
              <View
                key={index}
                style={{
                  width: 10,
                  height: 3,
                  backgroundColor: index !== currentItemIndex ? 'orange' : 'red',
                  borderRadius: 1.5,
                }}
              ></View>
            ))}
          </View>
          {currentItemIndex < socialMediaOnboardingScreens.length - 1 ? ( // Only show the arrow button if not at the last index
            <View className='absolute bottom-3 right-4'>
              <TouchableOpacity
                onPress={handleSwipePress}
                className='w-12 h-12 rounded-full bg-orange-400 flex justify-center items-center'
              >
                <AntDesign name="arrowright" size={24} color="white" />
              </TouchableOpacity>
            </View>
          ):<View className='absolute bottom-3 right-4'>
              <TouchableOpacity
                // onPress={handleSwipePress}
                className='p-3 rounded-lg bg-orange-400 flex justify-center items-center'
              >
                <Text className='text-white'
                style={{
                  fontFamily:"outfit-bold"
                }}>Get Started</Text>
                {/* <AntDesign name="arrowright" size={24} color="white" /> */}
              </TouchableOpacity>
            </View>
        }
        </View>
      </View>
    </PanGestureHandler>
  );
};

export default OnboardingScreen;
