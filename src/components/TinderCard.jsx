import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { tenderUsers } from '../utils/data';
import { LinearGradient } from 'expo-linear-gradient';

const TinderCard = ({user,currentIndex,numOfCards}) => {
  const { width, height } = Dimensions.get('screen');
  const tinderCardWidth = width * 0.8;

 

  return (
    <View
      style={{
        width: tinderCardWidth,
        aspectRatio: 1 / 1.67,
        borderRadius: 20,
        overflow: 'hidden',
        shadowColor: '#000',

        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
        
       
    
      }}>
      {/* Apply the linear gradient */}
    
      <Image
        style={{
          borderRadius: 20,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        source={{ uri: user?.image }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {user?.name}
        </Text>
      </View>


        <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={{
          position: 'absolute',
          top: "50%",
          left:0,
          right: 0,
          bottom: 0,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      />
    </View>
  );
};

export default TinderCard;

const styles = StyleSheet.create({
  textContainer: {
    position: 'absolute',
    bottom: 50,
    left: 30,
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontStyle: 'italic',
    fontFamily: 'outfit-semi',
  },
});
