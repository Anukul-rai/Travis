import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function WelcomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
        {/* Title */}
        <View style={styles.titleContainer}>
            <Text style={styles.appTitle}>TRAVIS</Text>
            <Text style={styles.subtitle}>Future is Here, Powered by AI.</Text>
        </View>
        {/* Logo */}
        <Image 
            source={require('../assets/images/logo.png')} 
            style={styles.logo} 
            resizeMode="contain"
        />
        {/* Button */}
        <TouchableOpacity 
            style={styles.button} 
            activeOpacity={0.7}
            onPress={() => router.push('/homescreen')}
            >
            <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center",
        backgroundColor: '#d5d1d1ed',
        gap: 10,
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    appTitle: {
        fontSize: wp(10),
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#a32b07',
    },
    subtitle: {
        fontSize: wp(4),
        fontWeight: '500',
        color: '#7e2105',
        letterSpacing: 1,
    },
    logo: {
        width: wp(75),
        height: wp(75),
        marginTop: 30,
    },
    button: {
        backgroundColor: '#e24a1c',
        paddingVertical: hp(2),
        paddingHorizontal: wp(10),
        borderRadius: 10,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: wp(4),
        fontWeight: '600',
    },
});
