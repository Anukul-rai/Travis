import { Link, Stack } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

export default function RootLayout() {
  return (
    <Stack  screenOptions={{
      // headerShown: false,
        headerStyle: { backgroundColor: '#f4511e'},
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
        <Stack.Screen name="welcomescreen" options={{ headerShown:false}}/>
        <Stack.Screen name="homescreen" options={{
          title: "Home",
          headerRight: () => (<Link href={'/Homescreen'}><Ionicons name="home" size={24} color="black" style={{ marginRight: 15 }} /></Link>),
        }} />
    </Stack>
  );
}
