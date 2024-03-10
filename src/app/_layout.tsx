import { Slot, Stack } from 'expo-router' 
import { SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';




const RootLayout = () => {
 
  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

    <SafeAreaView style={{flex:1}}>

       <Stack screenOptions={{headerShown:false,

      title:"INDEX"}}/>
      </SafeAreaView>
      </GestureHandlerRootView>

  )
}

export default RootLayout
