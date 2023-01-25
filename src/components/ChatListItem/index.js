import { Text,View ,Image ,StyleSheet ,Pressable} from 'react-native';
import dayjs from 'dayjs'
import { useNavigation } from '@react-navigation/native';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const ChatListItem=({chat})=>{
    const navigation=useNavigation();
    return (
     
        <Pressable onPress={()=>navigation.navigate('Chat', {id:chat.id,name:chat.user.name})} style={styles.container}>
            <Image 
            source={{uri:chat.user.image}}
            style={styles.image}
            />


            <View style={styles.content}>
                
            <View style={styles.row}>
                <Text style={styles.name}  >{chat.user.name}</Text>
                 <Text style={styles.subTitle}>{dayjs(chat.lastMessage.createdAt).fromNow(true)}  </Text>
            </View>
             
            <Text style={styles.subTitle}  >{chat.lastMessage.text}</Text>

            </View>
            
        </Pressable>
    )

};

const styles=StyleSheet.create({
   
   
    container:{
        flexDirection:'row',
        marginHorizontal: 10,
        marginVertical: 5,
        height:70

    },
    image:{
        width:50,
        height:50,
        borderRadius:9
    },
    content:{
        marginHorizontal:10,
        flex:1,
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderBottomColor:'lightgray'
        // backgroundColor:'red'
    },
    row:{
        flexDirection:'row',
        marginBottom:5
    },
    subTitle:{
        
    },
    name:{
        
        flex:1
    }
})



export default ChatListItem;