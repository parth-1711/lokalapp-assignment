import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="JobDetailsScreen"
        options={{
          title: "Job Details",
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
      />
      {/* <Stack.Screen name='BookmarksScreen'/> */}
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
