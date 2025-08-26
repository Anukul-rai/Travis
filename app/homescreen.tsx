import { Image, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link, router } from 'expo-router';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
        {/* Logo */}
        <View style={styles.logoContainer}>
            <Image 
            source={require('../assets/images/logo.png')} 
            style={styles.logo} 
            resizeMode="contain" 
            />
        </View>
        <View>
            <Text style={{fontSize: wp(5), fontWeight: 'bold', textAlign: 'center'}}>Welcome to TRAVIS</Text>
            <Text style={{fontSize: wp(6), fontWeight: '400',}}>Features</Text>
        </View>
        {/* Example Navigation */}
            <TouchableOpacity style={styles.button} onPress={()=> router.back()}>
            <Text style={styles.buttonText}>Back to Welcome</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        // justifyContent: "center", 
        // alignItems: "center", 
        backgroundColor: '#d5d1d1ed',
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        backgroundColor: '#d39797eb',
        width: wp(20),
        height: wp(20),
        borderRadius: wp(15), 
        overflow: "hidden", 
        borderWidth: 2,
        borderColor: '#f0e3df',
    },  
    logo: {
        width: "100%",  
        height: "100%", 
    },
    button: {
        backgroundColor: '#e24a1c',
        paddingVertical: hp(1.5),
        paddingHorizontal: wp(8),
        borderRadius: 10,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: wp(4),
        fontWeight: '600',
    },
});
