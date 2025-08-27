import { Image, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '@/constants/Theme';
import { Ionicons } from '@expo/vector-icons';

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

            {/* ChatGPT Feature Card */}
            <View style={[styles.featureCard, { backgroundColor: '#5fbb81' }]}>
                <View style={styles.featureRow}>
                    <View style={styles.featureIcon}>
                        <Image source={require('../assets/images/gpt.png')} style={styles.featureImage} />
                    </View>
                    <Text style={styles.featureTitle}>ChatGPT</Text>
                </View>
                <Text style={styles.featureDesc}>
                    ChatGPT is an AI assistant that helps with writing, coding, learning, and 
                    answering questions in a conversational way.
                </Text>
            </View>
            {/* Dall-E Feature Card */}
            <View style={[styles.featureCard, { backgroundColor: '#e6743b' }]}>
                <View style={styles.featureRow}>
                    <View style={styles.featureIcon}>
                        <Image source={require('../assets/images/dalle.png')} style={styles.featureImage} />
                    </View>
                    <Text style={styles.featureTitle}>DALL-E</Text>
                </View>
                <Text style={styles.featureDesc}>
                    DALL·E generates images from text prompts, turning your ideas into visuals instantly.
                </Text>
            </View>
            {/* SMart AI Feature Card */}
            <View style={[styles.featureCard, { backgroundColor: '#446cc4' }]}>
                <View style={styles.featureRow}>
                    <View style={styles.featureIcon}>
                        <Image source={require('../assets/images/smart.png')} style={styles.featureImage} />
                    </View>
                    <Text style={styles.featureTitle}>Smart AI</Text>
                </View>
                <Text style={styles.featureDesc}>
                    Smart AI provides quick insights, answers, and recommendations to make tasks easier.
                </Text>
            </View>
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
    featureCard: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 10,
        marginVertical: 10,
        marginHorizontal: hp(1.8),
        padding: 15,
        borderRadius: 12,
        elevation: 3, // for Android shadow
        shadowColor: '#000', // for iOS shadow
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 2 },
    },
    featureRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    featureIcon: {
        backgroundColor: '#076643eb',
        padding: 5,
        borderRadius: 10,
    },
    featureImage: {
        height: 40,
        width: 40,
        borderRadius: 50,
    },
    featureTitle: {
        fontWeight: '600',
        fontSize: 16,
    },
    featureDesc: {
        fontSize: 14,
        lineHeight: 20,
    },
});
