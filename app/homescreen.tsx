import { SafeAreaView, Text } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

export default function HomeScreen() {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" ,backgroundColor:'#d5d1d1ed' }}>
        <Link href={'/'}><Text>Home Screen</Text></Link>
        </SafeAreaView>
    );
}
