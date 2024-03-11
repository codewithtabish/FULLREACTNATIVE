import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} style={{ marginBottom: -3 }} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="fav"
        options={{
          tabBarLabel: "Favorites",
          title: "Favorites",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} style={{ marginBottom: -3 }} name="star" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} style={{ marginBottom: -3 }} name="user" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}