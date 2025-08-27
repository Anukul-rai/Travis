import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Logo({text}: {text?: String}) {
    return (
        <View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                <View style={styles.logoContainer}>
                    <Image 
                        source={require('../assets/images/logo.png')} 
                        style={styles.logo} 
                        resizeMode="contain" 
                    />
                </View>
            </View>
                <Text style={styles.featuresTitle}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
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
    featuresTitle: {
        fontSize: wp(6),
        fontWeight: '500',
        marginLeft: hp(1.8),
        marginTop: 10,
    },
})