import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';

const index = () => {
      const animation = React.useRef(null);

        React.useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    // animation.current?.play();
  }, []);
  return (
    <View className="bg-white flex-1 flex-col  items-center">
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorem quaerat, aspernatur earum cumque deserunt officia praesentium excepturi sint commodi exercitationem blanditiis, nostrum repellat dolor consectetur molestiae nobis laudantium? Eos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorem quaerat, aspernatur earum cumque deserunt officia praesentium excepturi sint commodi exercitationem blanditiis, nostrum repellat dolor consectetur molestiae nobis laudantium? Eos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorem quaerat, aspernatur earum cumque deserunt officia praesentium excepturi sint commodi exercitationem blanditiis, nostrum repellat dolor consectetur molestiae nobis laudantium? Eos.
      </Text>
       <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 300,
          height: 300,
          // backgroundColor: '#eee',
          margin:"auto"
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('../../../../assets/lottie/lottiejson.json')}
      />
    </View>
  )
}

export default index

const styles = StyleSheet.create({})