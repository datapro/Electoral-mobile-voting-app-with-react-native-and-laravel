
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet,Image} from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
import { useLocalSearchParams, router } from 'expo-router';
// import imglogin from '../../assets/images/login.png';

export default function editvoter(){
  const { allvoters } = useLocalSearchParams();
  const data = allvoters ? JSON.parse(allvoters) : null;

  if (!data) {
    return <Text>No data</Text>;
  }

  const [fullName, setFullName] = useState(data.fullName);
  const [phoneNumber, setPhoneNumber] = useState(data.phoneNumber);
  const [department, setDepartment] = useState(data.department);
  const [level, setLevel] = useState(data.level);
  const [matNo, setMatNo] = useState(data.matNo);
  const [pin, setPin] = useState(data.pin);
  const [email, setEmail] = useState(data.email);
  const [password, setPassword] = useState(data.password);
  const [role, setRole] = useState(data.role);
    
const updateCandidate = async () => {
  try {
    const formData = new FormData();

    formData.append('fullName', fullName);
    formData.append('phoneNumber', phoneNumber);
    formData.append('department', department);
    formData.append('level', level);
    formData.append('matNo', matNo);
    formData.append('pin', pin);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('role', role);

    // 👇 VERY IMPORTANT (Laravel fix)
    formData.append('_method', 'PUT');

    await fetch(`http://10.116.254.143:8000/api/allvoters/${data.id}`, {
      method: 'POST', 
      body: formData, 
    });

    alert('Updated successfully');
    router.replace({
          pathname: '/admin/allvoters',
      })

  } catch (error) {
    console.log(error);
    alert('Update failed');
  }
    };
    return (
          <>
                {/* <Image source={imglogin}
                      style={{
                        width: 80, height: 80,
                        alignSelf: 'center', borderRadius:20
                  }} alt="logo" /> */}
          <View style={styles.container}>
            <Text style={styles.p}>FullName</Text>
          <TextInput value={fullName} onChangeText={setFullName} style={styles.input} />
            <Text style={styles.p}>PhoneNumber</Text>
          <TextInput value={phoneNumber} onChangeText={setPhoneNumber} style={styles.input} />
            <Text style={styles.p}>Role</Text>
          <TextInput value={role} onChangeText={setRole} style={styles.input} />
            <Text style={styles.p}>Department</Text>
          <TextInput value={department} onChangeText={setDepartment} style={styles.input} />
            <Text style={styles.p}>Level</Text>
          <TextInput value={level} onChangeText={setLevel} style={styles.input} />
            <Text style={styles.p}>Matriculation Number</Text>
          <TextInput value={matNo} onChangeText={setMatNo} style={styles.input} />
            <Text style={styles.p}>Pin</Text>
          <TextInput value={pin} onChangeText={setPin} style={styles.input} />
            <Text style={styles.p}>Email</Text>
          <TextInput value={email} onChangeText={setEmail} style={styles.input} />
          {/* <TextInput value={password} secureTextEntry onChangeText={setPassword} style={styles.input} /> */}
          
    
          <TouchableOpacity style={styles.button} onPress={updateCandidate}>
            <Text style={{ color: '#fff' }}>Save Changes</Text>
          </TouchableOpacity>
            </View>
        </>
      );
    }
    
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'column',
            orientation: 'horizontal',
        // flex: 1,
        justifyContent: 'center',
        gap: 2,
        padding: 20,
      },
      input: {
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 8,
      },
      button: {
        backgroundColor: 'rgb(5, 70, 5)',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
      },
        p: {
           fontSize:10,
       },
    });
