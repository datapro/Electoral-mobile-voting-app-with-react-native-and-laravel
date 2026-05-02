import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet, View, TextInput, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import imglogin from '../../assets/images/login.png';

export default function Login() {
    const navigation = useNavigation();
    const [fullName, setFullName]= useState('');
    const [department, setDepartment]= useState('');
    const [phoneNumber, setPhoneNumber]= useState('');
    const [matNo, setMatNo]= useState('');
    const [level, setLevel] = useState("");
    const [pin, setPin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

  const registerUser = async () => {
  try {
    const response = await fetch('http://10.116.254.143:8000/api/register', {
      method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        fullName: fullName,
        phoneNumber: phoneNumber,
        department: department,
        level: level,
        matNo: matNo,
        pin:pin,
        email: email,
        password: password,
      }),
    });

      const data = await response.json();
     

    if (data.status) {
      alert('Registration successful');
      navigation.navigate('login');
    } else {
      alert(JSON.stringify(data.message));
    }
  } catch (error) {
    console.log(error);
  }
    };
    

    return (
    <>
        <View style={styles.container}>
        <Image source={imglogin}
            style={{
            width: 200, height: 200,
                alignSelf: 'center',
            marginTop:30,
                    }} alt="logo" />   
      {/* <Text style={ styles.label1}  >Full Name</Text> */}
      <TextInput  onChangeText={setFullName} style={ styles.matfont} placeholder='Full Name'/>
      {/* <Text style={ styles.label1}  >Phone Number</Text> */}
      <TextInput placeholder='Phone Number'  onChangeText={setPhoneNumber} style={ styles.matfont} />
      {/* <Text style={ styles.label1}  >Email</Text> */}
      <TextInput placeholder='Email' onChangeText={setEmail} style={ styles.matfont} />
      {/* <Text style={ styles.label1}  >Department</Text> */}
      <TextInput placeholder='Department'  onChangeText={setDepartment} style={ styles.matfont} />
      {/* <Text style={ styles.label1}>Select Level:</Text> */}
      <Picker
        selectedValue={level}
        onValueChange={(itemValue) => setLevel(itemValue)}
      style={ styles.label1}>
        <Picker.Item label="-- Choose Your Level --" value="" style={ styles.label1} />
        <Picker.Item label="ND1" value="ND1" style={ styles.label2}/>
        <Picker.Item label="ND2" value="ND2" style={ styles.label2}/>
        <Picker.Item label="HND1" value="HND1" style={ styles.label2}/>
        <Picker.Item label="HND2" value="HND2" style={ styles.label2} />
      </Picker>
      {/* <TextInput  onChangeText={setMatNo} style={ styles.matfont} /> */}
      {/* <Text style={ styles.label1}  >Matric No</Text> */}
      <TextInput placeholder='Matric No'  onChangeText={setMatNo} style={ styles.matfont} />
      {/* <Text style={ styles.label1} >PIN</Text> */}
      <TextInput placeholder='PIN' secureTextEntry onChangeText={setPin} style={ styles.matfont} />
      {/* <Text style={ styles.label1} >Password</Text> */}
      <TextInput placeholder='Password' secureTextEntry onChangeText={setPassword} style={ styles.matfont} />
      {/* <Button title="Login" onPress={login} /> */}
            </View>
       <TouchableOpacity 
                onPress={registerUser}
                style={{
                  backgroundColor: 'rgb(5, 70, 5)',
                  padding: 10,
                  borderRadius: 8,
                  width: 200,
                    alignSelf: 'center',
                    marginBottom:5,
                    marginTop:20,
                  
                }}
                >
                <Text style={{ color: 'white', textAlign: 'center',fontSize:10, }}>
                  Register
                </Text>
              </TouchableOpacity>
      </>  
  );
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    // backgroundColor: 'pink',
    alignItems: 'left',
    justifyContent: 'center',

        marginTop: 80,
    gap:10,
    paddingBottom:50
   

  },
  matfont: {
    // fontWeight: 'bold',
      fontSize: 10,
    backgroundColor: 'white',
    width: 300,
    alignSelf: 'center',
      borderRadius:100,
    paddingLeft:10,
    paddingRight:50,

},

  label1: {
    // fontWeight: 'bold',
    fontSize: 12,
    width: 300,
      alignSelf: 'center',
    },
  label2: {
    // fontWeight: 'bold',
    fontSize: 12,
    width: 300,
      alignSelf: 'center',
    },

});