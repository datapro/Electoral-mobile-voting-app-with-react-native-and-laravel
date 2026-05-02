import React, { useState } from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import imglogin from '../../assets/images/login.png';


export default function Register() {
  const [image, setImage] = useState(null);
  const [fullname, setFullname] = useState('');
  const [nickName, setNickName] = useState('');
  const [department, setDepartment] = useState('');
  const [position, setPosition] = useState('');
  const navigation = useNavigation();
  // 📸 Pick Image
        const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            quality: 1,
        });

        if (!result.canceled) {
            const uri = result.assets[0].uri;
            console.log('SELECTED URI:', uri);
            setImage(uri); //
        }
        };

  // Upload everything
  const submit = async () => {
  if (!image) {
    alert('No image selected');
    return;
  }

  const formData = new FormData();

  formData.append('image', {
    uri: image,            // ✅ now it's just string
    name: 'photo.jpg',
    type: 'image/jpeg',
  });

  formData.append('fullname', fullname);
  formData.append('nickName', nickName);
  formData.append('department', department);
  formData.append('position', position);

    try {
    const response = await fetch(
      'http://10.116.254.143:8000/api/store',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      }
    );

    const data = await response.json(); // ✅ IMPORTANT

    console.log('RESPONSE', data);
        alert('Uploaded successfully');
        navigation.navigate('allCandidate');

  } catch (error) {
    console.log('ERROR:', error);
    alert('Upload failed');
  }
};

  return (
    <View style={styles.container}>
        <Image source={imglogin}
        style={{
          width: 300, height: 300,
          alignSelf: 'center', borderRadius:20
        }} alt="logo" />
      <TextInput placeholder="Full Name" style={styles.pinfont} onChangeText={setFullname} />
      <TextInput placeholder="Nickname" style={styles.pinfont} onChangeText={setNickName} />
      <TextInput placeholder="Department" style={styles.pinfont} onChangeText={setDepartment} />
      <TextInput placeholder="Position" style={styles.pinfont} onChangeText={setPosition} />
          <View style={{flexDirection: 'row', alignSelf: 'center', justifyContent: 'center', gap: 10,}}>
            {image && (
                <Image
                        //   source={{ uri: image.uri }}
                source={{ uri: image }}
                style={{ width: 100, height: 50, alignSelf: 'center', borderRadius: 10 }}
                />
            )}

            <TouchableOpacity onPress={pickImage} style={styles.uploadBtn}>
                <Text style={styles.buttonText}>Select Image</Text>
            </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={submit} style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
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
    },
   title: {
    fontSize: 18,
    marginBottom: 15,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 15,
    borderRadius: 10,
  },
  button: {
    backgroundColor: 'rgb(5, 70, 5)',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
      width: 300,
    alignSelf: 'center',
  },
  uploadBtn: {
    backgroundColor: 'green',
    padding: 12,
    borderRadius: 8,
    width: 200,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});