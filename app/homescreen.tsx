import { Image, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react';
import { router } from 'expo-router';
import { COLORS } from '@/constants/Theme';
import { Ionicons } from '@expo/vector-icons';
import FeatureCard from '@/components/FeatureCard';
import Logo from '@/components/Logo';

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            {/* Logo */}
            <Logo text={'Features'}/>
            <View style={styles.headerRow}>
                            <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                                <Ionicons name="arrow-back" size={24} color="black" />
                            </TouchableOpacity>
                            <Text style={styles.headerText}>Welcome to TRAVIS</Text>
                        </View>
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
});
