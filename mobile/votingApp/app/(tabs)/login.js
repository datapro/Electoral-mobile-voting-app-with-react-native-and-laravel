import { useState } from 'react';
import {StyleSheet, View, TextInput,Image,TouchableOpacity,Text} from 'react-native';
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useNavigation } from '@react-navigation/native';
import imglogin from '../../assets/images/login.png';
import { useRouter } from 'expo-router';




export default function signin() {
  const [email, setEmail] = useState('');
  const [pin, setPin] = useState('');
  const router = useRouter();
  // const navigation = useNavigation();

const login = async () => {
  try {
    const response = await axios.post('http://10.116.254.143:8000/api/login', {
      email,
      pin,
    });

    if (!response.data.status) {
      alert(response.data.message);
      return;
    }

    const { user, token } = response.data;

    // ✅ SAVE TOKEN
    await AsyncStorage.setItem("token", token);

    // optional: save user
    await AsyncStorage.setItem("user", JSON.stringify(user));

    if (user.role === 'admin') {
      router.push('/admin');
    } else {
      router.push('/(tabs)/about');
    }

  } catch (error) {
    console.log('ERROR:', error.response?.data || error.message);

    alert(
      error.response?.data?.message ||
      'Login failed'
    );
  }
};
  return (
    <View style={styles.container}>
      <Image source={imglogin}
        style={{
          width: 300, height: 300,
          alignSelf: 'center',borderRadius:20
        }} alt="logo" />
      <TextInput placeholder="Email address" onChangeText={setEmail} style={ styles.pinfont} />
      <TextInput placeholder="Pin" secureTextEntry onChangeText={setPin} style={ styles.pinfont} />
      {/* <Button title="Login" onPress={login} /> */}
       <TouchableOpacity 
                onPress={login}
                style={{
                  backgroundColor: 'rgb(5, 70, 5)',
                  padding: 15,
                  borderRadius: 8,
                  marginTop: 20,
                  width: 200,
                  alignSelf: 'center',
                  marginBottom:20,
                }}
                >
                <Text style={{ color: 'white', textAlign: 'center' }}>
                  Login
                </Text>
              </TouchableOpacity>
    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'pink',
    alignItems: 'left',
    justifyContent: 'center',
    // backgroundColor:'#50215a70',
    gap: 20,
    // marginTop:0        
   

  },
  pinfont: {
    fontWeight: 'bold',
    fontSize: 10,
    backgroundColor: 'white',
    // height: 50,
    width: 300,
    paddingLeft:10,
    paddingRight:50,
    alignSelf: 'center',
    borderRadius:100,
}
});