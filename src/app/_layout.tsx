import { Slot, Stack } from 'expo-router' 
import { SafeAreaView } from 'react-native-safe-area-context';




const RootLayout = () => {
 
  
  return (
    <SafeAreaView style={{flex:1}}>

       <Stack screenOptions={{headerShown:false,

      title:"INDEX"}}/>
      </SafeAreaView>

  )
}

export default RootLayout
