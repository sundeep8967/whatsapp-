
import React, { useEffect } from "react";
import { FlatList, ImageBackground , KeyboardAvoidingView, StyleSheet } from "react-native";
import bg from '../../assets/images/BG.png';
import Message  from "../components/Message";
import messages from "../../assets/data/messages.json";
import InputBox from "../components/InputBox/index.js";
import {useRoute ,useNavigation} from '@react-navigation/native';



const ChatScreen=()=>{

    const route=useRoute();
    // console.log(route);
    const navigation=useNavigation();
    
 

   

    useEffect (()=>{
        navigation.setOptions({title:route.params.name})
    },[route.params.name])

    return(

    
<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : "" } style={styles.bg}>

    <ImageBackground source={bg} style={styles.bg}>
        <FlatList data={messages} renderItem={ ( {item}) =><Message message={item} /> } StyleSheet={styles.list} inverted />
        
        <InputBox />
        
    </ImageBackground>
    </KeyboardAvoidingView>
    ) 

};


const styles=StyleSheet.create({
    bg:{
        flex:1,
    },
    list:{
        
        

    },
})

export default ChatScreen;