import { SafeAreaView, Text } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

export default function HomeScreen() {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" ,backgroundColor:'#d5d1d1ed' }}>
        <Text>🏠 This is the Home Screen</Text>
        </SafeAreaView>
    );
}
