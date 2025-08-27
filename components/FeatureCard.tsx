import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { router } from 'expo-router';


export default function FeatureCard() {
  return (
    <View>
      {/* ChatGPT Feature Card */}
        <TouchableOpacity 
            activeOpacity={0.7}
            style={[styles.featureCard, { backgroundColor: '#5fbb81' }]}
            onPress={()=>router.push('/chatscreen')}
            >
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
        </TouchableOpacity>
        {/* Dall-E Feature Card */}
        <TouchableOpacity 
        style={[styles.featureCard, { backgroundColor: '#e6743b' }]}
        activeOpacity={0.7}
        onPress={()=>router.push('/chatscreen')}
        >
            <View style={styles.featureRow}>
                <View style={styles.featureIcon}>
                    <Image source={require('../assets/images/dalle.png')} style={styles.featureImage} />
                </View>
                <Text style={styles.featureTitle}>DALL-E</Text>
            </View>
            <Text style={styles.featureDesc}>
                DALL·E generates images from text prompts, turning your ideas into visuals instantly.
            </Text>
        </TouchableOpacity>
        {/* SMart AI Feature Card */}
        <TouchableOpacity                 
            onPress={()=>router.push('/chatscreen')}
            activeOpacity={0.7}
            style={[styles.featureCard, { backgroundColor: '#446cc4' }]}>
            <View style={styles.featureRow}>
                <View style={styles.featureIcon}>
                    <Image source={require('../assets/images/smart.png')} style={styles.featureImage} />
                </View>
                <Text style={styles.featureTitle}>Smart AI</Text>
            </View>
            <Text style={styles.featureDesc}>
                Smart AI provides quick insights, answers, and recommendations to make tasks easier.
            </Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
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
})