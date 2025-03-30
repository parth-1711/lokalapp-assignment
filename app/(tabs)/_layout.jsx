import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffd33d",
        headerStyle: {
          backgroundColor: "#ffd33d", 
        },
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "bold",
          color: "#333", 
          textAlign: "center",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "home-sharp" : "home-outline"} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="BookmarksScreen"
        options={{
          title: "Bookmarks",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "bookmark-sharp" : "bookmark-outline"} color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
