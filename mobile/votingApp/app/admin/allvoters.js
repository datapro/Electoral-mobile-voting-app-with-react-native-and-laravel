import React, { useEffect, useState,useCallback } from 'react';
import { View, Text, Image, FlatList, StyleSheet,TouchableOpacity} from 'react-native';
import { router } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';


export default function allvoters() {
        const [voters, setVoters] = useState([]);
        const fetchCandidates = () => {
                fetch('http://10.116.254.143:8000/api/allvoters')
                    .then(res => res.json())
                    .then(data => setVoters(data))
                    .catch(err => console.log(err));
    };
    
        useFocusEffect(
                useCallback(() => {
                    fetchCandidates();
                }, [])
        );
        // delete item 
        const deleteVoter = async (id) => {
      try {
        await fetch(`http://10.116.254.143:8000/api/allvoters/${id}`, {
            method: 'DELETE',
            
        });
    
        alert('Deleted');
    
        // refresh list
        setVoters(prev => prev.filter(item => item.id !== id));
    
      } catch (error) {
        console.log(error);
      }
    };
    
        const renderItem = ({ item }) => (
    
            <View style={styles.card}>
            {/* <Image source={{ uri: `http://10.116.254.143:8000/${item.image}?t=${Date.now()}` }}
                style={styles.image}/> */}
    
            <Text style={styles.name}>Voter Name: {item.fullName}</Text>
            <Text style={styles.name}>ID: {item.id}</Text>
            <Text>Phone Number: {item.phoneNumber}</Text>
            <Text>Department: {item.department}</Text>
            <Text>Level: {item.level}</Text>
            <Text>Matriculation Number: {item.matNo}</Text>
            <Text>Pin: {item.pin}</Text>
            <Text>Role: {item.role}</Text>
            <Text>Email: {item.email}</Text>
    
            <View style={{ flexDirection: 'row', gap: 10,marginTop:10, }}>
                <TouchableOpacity
                style={styles.editBtn}
                    onPress={() =>
                        router.push({
                            pathname: '/admin/editvoter',
                            params: {
                            allvoters: JSON.stringify(item),
                            },
                        })
                        }>
                <Text style={{ color: '#fff' }}>Edit</Text>
                </TouchableOpacity>
    
                <TouchableOpacity
                style={styles.deleteBtn}
                onPress={() => deleteVoter(item.id)}
                >
                <Text style={{ color: '#fff' }}>Delete</Text>
                </TouchableOpacity>
            </View>
        
        </View>
        );
    
        // delete item 
        
    return (
        <FlatList
        data={voters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        />
    );
    
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
  },
  image: {
    width: 300,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    },
  editBtn: {
  backgroundColor: 'rgb(5, 70, 5)',
      borderRadius: 5,
      padding:10,
},

deleteBtn: {
  backgroundColor: 'rgb(128,0,0)',
  padding: 10,
  borderRadius: 5,
},
});