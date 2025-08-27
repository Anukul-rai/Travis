import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { COLORS } from '@/constants/Theme'
import Logo from '@/components/Logo'
import { dummyData } from '@/constants'
import { Ionicons } from '@expo/vector-icons'
import Voice from '@react-native-community/voice';



export default function ChatScreen() {
    const [msg, setMsg] = useState(dummyData)
    const [recording,setRecording]=useState(false)
    const [speaking,setSpeaking]=useState(true)
    const scrollViewRef = useRef<ScrollView>(null);
    useEffect(()=>{
        scrollViewRef.current?.scrollToEnd({ animated: true });
    },[msg,recording])

    const clear=()=>{
        setMsg([])
    }
    const onSpeechStart= (e:any) =>{
        // setSpeaking(true)
        console.log('Speech start ')
    }
    const onSpeechEnd= (e:any)=>{
        setRecording(false)
        console.log('Speech end ')
    }
    const onSpeechResults= (e:any)=>{
        console.log('Speech results ',e)
    }
    const onSpeechError= (e:any)=>{
        console.log('Speech error ',e)
    }
    const startRecording = async()=>{
        setRecording(true)
        try {
            await Voice.start('en-US')
            setSpeaking(true)
        } catch (error) {
            console.log('Error starting Voice recognition: ', error);
        }
    }
    const stopRecording = async()=>{
        try {
            await Voice.stop()
            setRecording(false)
            setSpeaking(false)
        } catch (error) {
            console.log('Error stopping Voice recognition: ', error);
        }
    }

    useEffect(()=>{
        Voice.onSpeechStart=onSpeechStart
        Voice.onSpeechEnd=onSpeechEnd
        Voice.onSpeechResults=onSpeechResults
        Voice.onSpeechError=onSpeechError
        return()=>{
            Voice.destroy().then(Voice.removeAllListeners)
        }
    },[])
    return (
        <SafeAreaView  style={styles.container}>
            <Logo text={'Assistant'} />

            {/* Chat Area */}
            <View style={styles.chatBox}>
            {
                msg.length === 0 ? (
                    <View style={{flex:1,justifyContent:'center',alignItems:'center',padding:20}}>
                        <Text style={{fontSize:16,fontWeight:'bold',textAlign:'center',marginTop:10,color:'#444242'}}>Hi, I am Travis, your AI assistant. How can I help you today?</Text>
                    </View>
                ) : (
                        <ScrollView ref={scrollViewRef} showsVerticalScrollIndicator={false}>
                            {msg.map((item, index) => {
                                if (item.role === 'assistant') {
                                    if (item.content.startsWith('http')) {
                                        return (
                                            <View key={index} style={styles.imageWrapper}>
                                                <Image 
                                                    source={{ uri: item.content }} 
                                                    style={styles.chatImage} 
                                                    resizeMode="cover"
                                                />
                                            </View>
                                        )
                                    } else {
                                        return (
                                            <View key={index} style={[styles.bubble, styles.assistantBubble]}>
                                                <Text style={styles.assistantText}>{item.content}</Text>
                                            </View>
                                        )
                                    }
                                } else {
                                    return (
                                        <View key={index} style={[styles.bubble, styles.userBubble]}>
                                            <Text style={styles.userText}>{item.content}</Text>
                                        </View>
                                    )
                                }
                            })}
                        </ScrollView>
                )
            }
            </View>

            {/* recording ,clear and stop button  */}
            <View>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',padding:10,marginBottom:10,gap:20,borderRadius:30}}>
                    {
                        speaking && (
                            <TouchableOpacity onPress={() => setRecording(false)}>
                                <View style={{backgroundColor:COLORS.button,paddingHorizontal:10,paddingVertical:5,marginHorizontal:15,borderRadius:10,alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{color:'#fff',fontWeight:'bold'}}>Stop</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                    {
                        recording ? (
                            <TouchableOpacity onPress={stopRecording}>
                                {/* stop recording */}
                                <Image source={require('../assets/images/micgf.gif')} style={{height:80,width:80,borderRadius:50}}/>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity onPress={startRecording}>
                                {/* start recording */}
                                <Image source={require('../assets/images/mic.png')} style={{width:80,height:80,borderRadius:50}} />
                            </TouchableOpacity>
                        )
                    }
                    <TouchableOpacity onPress={clear}>
                        <View style={{backgroundColor:COLORS.button,paddingHorizontal:10,paddingVertical:5,marginHorizontal:15,borderRadius:10,alignItems:'center',justifyContent:'center'}}>
                            <Text style={{color:'#fff',fontWeight:'bold'}}>Clear</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    chatBox: {
        flex: 1,
        backgroundColor: '#3baf3054',
        padding: 10,
        marginHorizontal: 15,
        marginTop: 10,
        borderRadius: 10,
        paddingBottom: 20, 
    },
    bubble: {
        marginVertical: 5,
        padding: 10,
        borderRadius: 15,
        maxWidth: '75%',
    },
    assistantBubble: {
        alignSelf: 'flex-start',
        backgroundColor: '#c9dcb2',
        borderTopLeftRadius: 0,
    },
    userBubble: {
        alignSelf: 'flex-end',
        backgroundColor: 'white',
        borderTopRightRadius: 0,
    },
    assistantText: {
        color: '#000',
    },
    userText: {
        color: '#000',
    },
    imageWrapper: {
        marginVertical: 5,
        alignSelf: 'flex-start',
    },
    chatImage: {
        width: 200,
        height: 200,
        borderRadius: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 15,
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingHorizontal: 15,
        paddingVertical: 5,
        elevation: 3,
    },

})
