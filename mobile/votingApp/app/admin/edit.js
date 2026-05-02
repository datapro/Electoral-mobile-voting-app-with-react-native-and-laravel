import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useLocalSearchParams, router } from 'expo-router';
import imglogin from '../../assets/images/login.png';

export default function Edit() {
  const { candidate } = useLocalSearchParams();
  const data = candidate ? JSON.parse(candidate) : null;

  if (!data) {
    return <Text>No data</Text>;
  }

  const [fullname, setFullname] = useState(data.fullname);
  const [nickName, setNickName] = useState(data.nickName);
  const [department, setDepartment] = useState(data.department);
  const [position, setPosition] = useState(data.position);
  const [image, setImage] = useState(null);

  // pick image
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  // update with image
const updateCandidate = async () => {
  try {
    const formData = new FormData();

    formData.append('fullname', fullname);
    formData.append('nickName', nickName);
    formData.append('department', department);
    formData.append('position', position);

    // 👇 VERY IMPORTANT (Laravel fix)
    formData.append('_method', 'PUT');

    if (image) {
      formData.append('image', {
        uri: image,
        name: 'photo.jpg',
        type: 'image/jpeg',
      });
    }

    await fetch(`http://10.116.254.143:8000/api/candidates/${data.id}`, {
      method: 'POST', 
      body: formData, 
    });

    alert('Updated successfully');
    router.replace({
          pathname: '/admin/allCandidate',
      })

  } catch (error) {
    console.log(error);
    alert('Update failed');
  }
};
  return (
    <View style={styles.container}>
        <Image source={imglogin}
              style={{
                width: 80, height: 80,
                alignSelf: 'center', borderRadius:20
        }} alt="logo" />
      
      <TextInput value={fullname} onChangeText={setFullname} style={styles.input} />
      <TextInput value={nickName} onChangeText={setNickName} style={styles.input} />
      <TextInput value={department} onChangeText={setDepartment} style={styles.input} />
      <TextInput value={position} onChangeText={setPosition} style={styles.input} />
      
      <View style={{
        flexDirection: 'row',
        alignSelf: 'center', justifyContent: 'center',
        gap: 10,
      }}>
      {/* Image preview */}
      <Image
        source={{
          uri: image
            ? image
            : `http://10.116.254.143:8000/${data.image}`,
        }}
        style={{ width: 100, height: 100, marginBottom: 10 }}
      />

      <TouchableOpacity style={styles.uploadBtn} onPress={pickImage}>
        <Text style={{ color: '#fff' }}>Choose Image</Text>
      </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={updateCandidate}>
        <Text style={{ color: '#fff' }}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 5,
    padding: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
  },
  button: {
    backgroundColor: 'rgb(5, 70, 5)',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
   uploadBtn: {
    backgroundColor: 'green',
    padding: 12,
    borderRadius: 8,
    width: 200,
    alignSelf: 'center',
  },
});