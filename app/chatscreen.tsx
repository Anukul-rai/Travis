import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '@/constants/Theme'

export default function ChatScreen() {
    return (
        <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center',backgroundColor:COLORS.background}}>
        <Text>Chatscreen</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})