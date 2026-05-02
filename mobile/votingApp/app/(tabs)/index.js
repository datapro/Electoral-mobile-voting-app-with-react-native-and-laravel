import { View, Text,TouchableOpacity,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import imglogin from '../../assets/images/login.png';

export default function Landing() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', }}>

      <Image source={imglogin}
        style={{
          width: 300, height: 300,
          alignSelf: 'center',borderRadius:20
        }} alt="logo" />
      
      <Text style={{ fontSize: 24, marginBottom: 20 ,textAlign:'center', color:'black'}}>
        🗳️ School Voting System
      </Text>

      <Text style={{ marginBottom: 30 ,textAlign:'center',color:'black'}}>
        Welcome! Cast your vote securely.
      </Text>

      <TouchableOpacity 
          onPress={() => navigation.navigate('login')}
          style={{
            backgroundColor: 'rgb(5, 70, 5)',
            padding: 15,
            borderRadius: 8,
            marginTop: 20,
            width: 200,
            alignSelf:'center'
          }}
          >
          <Text style={{ color: 'white', textAlign: 'center' }}>
            Start Voting
          </Text>
        </TouchableOpacity>
    </View> 

  );
}