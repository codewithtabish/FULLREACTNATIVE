import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { useNavigation } from "@react-navigation/native";

const index = () => {
  const navi = useNavigation();
  return (
    <>
      <Stack.Screen options={{ title: "HomeIndex" }} />
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt dolor
        ipsam atque quia vitae magni, vero, natus iste ab maxime accusamus
        architecto dolore cumque quas odio minima dolorem quis reprehenderit.
      </Text>
      <TouchableOpacity
      onPress={()=>navi.navigate('second')}
        className="bg-orange-400 p-3 rounded-md
      w-1/3 mx-auto my-2"
      >
        <Text className="text-white">Home Second</Text>
      </TouchableOpacity>
      <Link href={"second"}>
        <Text>Homesecond</Text>
      </Link>
    </>
  );
};

export default index;

const styles = StyleSheet.create({});
