import { StatusBar } from 'expo-status-bar';
import React ,{useState} from 'react';
import { StyleSheet, Text, View ,Pressable, TextInput, Alert, ToastAndroid, Modal} from 'react-native';
import Listview from './components/Listview';



export default function App() {

  const [text , settext] = useState('')
  const [submit , setsubmit] = useState(false)
  const [modal , setmodal] = useState(false)
  const update = (enter)=>{
    settext(enter)}

  const check = ()=>{
    
    if (text.length>3) { 
      setsubmit(!submit);
    } else{
    //   Alert.alert("warning" , "the name must be longer than 3 words" , [
    //     {text:'later' ,onPress:()=>{console.warn('nicely pressed');} }, 
    //   {text:'cancel' ,onPress:()=>{console.warn('nicely pressed');}} ,
    //   { text:'okk' ,onPress:()=>{console.warn('nicely pressed');}}
    // ] ,{ cancelable: true , onDismiss: () =>{console.warn('dismissed');} } )

    //////////////
    // ToastAndroid.showWithGravityAndOffset('hello pakistan' ,ToastAndroid.SHORT, ToastAndroid.TOP, 0 ,200 )
    
    setmodal(true)
  }
  }
  return (
    <View style={styles.container}>

      <Modal visible ={modal}
      onRequestClose={()=>{setmodal(false)}}
      transparent
      animationType='slide'
      hardwareAccelerated
      >

   <View style={styles.center}>
          <View style={styles.warning}>
            <View style={styles.warning_title}>
               <Text style={styles.text}>WARNING!!</Text>
            </View>
            <View style={styles.warning_body}>
            <Text style={styles.text}>The name must be aleast 3</Text>
            </View>
            <View style={{borderTopWidth:2}}>
            <Pressable android_ripple={{color:'#fff'}} onPress={()=>{setmodal(false)}} style={[styles.warning_button]}><Text style={styles.text}> OK </Text></Pressable>
            </View>
          </View>
    </View>


  

    

      </Modal>
   
      <TextInput style={styles.TextInput} placeholder='enter text' onChangeText={update} />
      <Pressable android_ripple={{color:'red'}} style = {({pressed})=>[{backgroundColor: pressed? 'white' : 'brown'} , styles.Pressable]}  onPress={check}><Text>{submit? 'prompt' : 'unprompt'}</Text></Pressable>

      {
        submit?
        <Text>Your name is {text}</Text>



        :
         null
      }
  

      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  warning_button:{
    backgroundColor:'#00ffff',
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
  },
  warning:{
    width:300,
    height:300,
    backgroundColor:'#ffffff',
    borderWidth:1,
    borderRadius:20,
    borderColor:'#000',
  },
  text:{
   color:'#000000',
   fontSize:20,
   margin:10,
   textAlign:'center'
  },
  center:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#00000099'
  },
  warning_title:{
    height:50,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#ff0',
    borderTopRightRadius:20,
    borderTopLeftRadius:20,},
  
  
    warning_body:{
   height:200,
   alignItems:'center',
   justifyContent:'center',
  },
  Pressable:{
    width:75,
    height:25,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:15,
    backgroundColor:'#4CAF50',
    padding:16,
  },
  TextInput:{
    borderWidth:2,
    padding:8,
    marginTop:20,
  }
  
});
