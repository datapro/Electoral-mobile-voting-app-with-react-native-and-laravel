import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image,Button,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import imglogin from '../../assets/images/login.png';

export default function App() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
        <Image source={imglogin}
        style={{
          width: 300, height: 300,
          alignSelf: 'center',borderRadius:20
        }} alt="logo" />
      
      <Text style={styles.heading}>Voting Mobile App!</Text>
      <Text style={styles.p}>The functions of electronic voting depend primarily
        on what the organizers intend to achieve. In general, two main types of e-voting can be identified:
        e-voting which is physically supervised by representatives of governmental or independent electoral authorities (e.g. electronic voting machines located at polling stations);
           
          </Text>
          
  {/* {/* <Button title="Sign Up" style={styles.btnSign}/> */}
       <TouchableOpacity 
                 onPress={() => navigation.navigate('signup')}
                style={{
                  backgroundColor: 'rgb(5, 70, 5)',
                  padding: 10,
                  borderRadius: 8,
                  margin: 5,
                  width: 150,
                  alignSelf: 'center',
                  marginTop: 20,
                }}
                >
                <Text style={{ color: 'white', textAlign: 'center' ,fontSize:12 ,}}>
                  Signup
                </Text>
              </TouchableOpacity> 

    </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
        //  backgroundColor:'#50215a70',
        gap:0,
        
  },
  text:{
  fontSize:50,
  color:'white',
  textAlign:'center',
  },

heading:{
  fontSize: 20,
  color:'black',
marginBottom:10,
marginRight:100,
// textDecorationLine: 'underline',
fontWeight: 'bold',
  marginTop: 50,

},
  
  imageload:{
  position:'absolute',
  top:40,
  width:400,
  height:200,
  borderRadius:20,
},
    p: {
      textAlign: 'justify',
      color:'black',
        lineHeight: 20,
        marginLeft: 50,
      marginRight: 30,
        width:300,
}

});
