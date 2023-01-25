import { View , Text , StyleSheet } from "react-native";
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);



const Message=({message})=>{


  const isMyMessage=()=>{
    
    return message.user.id=='u1';

  }

    return (
    <View style={[
        styles.container, 
        {
        backgroundColor:isMyMessage()?'white':'#DCF8C5',
        alignSelf:isMyMessage()?'flex-start':'flex-end',
        },
 ]}>
        <Text>{message.text}</Text>
        <Text style={styles.time}>{dayjs(message.createdAt).fromNow(true)}</Text>
    </View>
    );
};

const styles=StyleSheet.create({
    container:{

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        
        elevation: 2,

        
        margin:5,
       
        padding:10,
        borderRadius:20,
        width:'80%',
       
    },

    time:{
        alignSelf:'flex-end'
    }


});


export default Message;