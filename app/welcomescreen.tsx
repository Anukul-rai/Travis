import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

export default function WelcomeScreen() {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center",backgroundColor:'#d5d1d1ed' }}>
            {/* <Text>Welcome Screen 🎉</Text> */}
            <View style={{justifyContent:'center',alignItems:'center',marginTop:10}}>
                <Text style={{fontSize:30,fontWeight:'bold',marginBottom:10}}>TRAVIS</Text>
                <Text style={{fontSize:15,fontWeight:'400'}}>Future is Here, Powered by AI.</Text>
            </View>
            {/* logo */}
            <View>
                <Image source={require('../assets/images/logo.png')} style={{width:300,height:300,marginTop:30}} />
            </View>
            {/* button */}
            <View>
                <TouchableOpacity style={{backgroundColor:'#e24a1c',padding:15,borderRadius:10,marginTop:20}} activeOpacity={0.7} 
                onPress={()=>(router.push('/Homescreen'))}>
                    <Text style={{color:'white',fontSize:16,fontWeight:'600'}}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})