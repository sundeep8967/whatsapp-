import { View, Text , StyleSheet ,TextInput } from 'react-native';

import {AntDesign , MaterialIcons} from '@expo/vector-icons';

import React, { useState } from 'react'

const InputBox = () => {

   
  const [newMessage , setNewMessage]=useState("");


  const onSend=()=>{
    console.warn("send a new message "+newMessage);
    
    setNewMessage("");

  };

  return (
    <View style={styles.container}>
     
   {/* 1) icon  */}

    <AntDesign name="plus" size={27} color="royalblue" style={styles.plus}/>   

   {/* 2) text InputBox */}

   <TextInput value={newMessage} onChangeText={setNewMessage} placeholder="type your message here" style={styles.input}/>

   {/* 3) icon */}

   <MaterialIcons onPress={onSend} name="send" size={27} color="royalblue"  style={styles.send}/>


    </View>
  )
};


const styles=StyleSheet.create({

container:{
  flexDirection:'row',
  backgroundColor:'whitesmoke',
  padding:5,
  borderRadius:15,
},

input:{
  flex:1,
  backgroundColor:'white',
  borderRadius:50,
  padding:10,
  paddingHorizontal:10,
  borderColor:'lightgrey',
  borderWidth:StyleSheet.hairlineWidth,


  
},

send:{
  padding:10,
},

plus:{
  padding:10,

},




});


export default InputBox;