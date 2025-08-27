import { Image, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '@/constants/Theme';
import { Ionicons } from '@expo/vector-icons';
import FeatureCard from '@/components/FeatureCard';

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            {/* Logo */}
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                <View style={styles.logoContainer}>
                    <Image 
                        source={require('../assets/images/logo.png')} 
                        style={styles.logo} 
                        resizeMode="contain" 
                    />
                </View>
            </View>
            <View style={styles.headerRow}>
                <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Welcome to TRAVIS</Text>
            </View>
            <Text style={styles.featuresTitle}>Features</Text>

            {/* featuredcard */}
            <FeatureCard/>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: COLORS.background,
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
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginVertical: 10,
        paddingHorizontal: hp(1.8),
    },
    backButton: {
        backgroundColor: '#e6e6e6',
        padding: 8,
        borderRadius: 10,
    },
    headerText: {
        fontSize: wp(5),
        fontWeight: 'bold',
    },
    featuresTitle: {
        fontSize: wp(6),
        fontWeight: '500',
        marginLeft: hp(1.8),
        marginTop: 10,
    },
    
});
