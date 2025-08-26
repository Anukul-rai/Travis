import { Link, Stack } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

export default function RootLayout() {
  return (
    <Stack  screenOptions={{
      headerShown: false,
        // headerStyle: { backgroundColor: '#f4511e'},
        // headerTintColor: '#fff',
        // headerTitleStyle: { fontWeight: 'bold' },
      }}>
        <Stack.Screen name="welcomescreen" options={{ 
          title:'',headerShown:false}}/>
        <Stack.Screen name="homescreen" options={{
          title:"Home",
          headerRight: () => (<Link href={'/welcomescreen'}><Ionicons name="exit-outline" size={25} color="white" style={{ marginRight: 15 }} /></Link>),
        }} />
    </Stack>
  );
}
