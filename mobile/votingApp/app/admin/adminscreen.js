import { View, Text, TouchableOpacity,Image } from 'react-native';
import imglogin from '../../assets/images/login.png';
// import { useNavigation } from '@react-navigation/native';

export default function Landing() {
  // const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', }}>
       <Image source={imglogin}
        style={{
          width: 300, height: 300,
          alignSelf: 'center',borderRadius:20
        }} alt="logo" />
      
      <Text style={{ fontSize: 24, marginBottom: 20 ,textAlign:'center', color:'black'}}>
        🗳️ Welcome Admin
      </Text>

      <Text style={{
        marginBottom: 30, textAlign: 'justify',
        color: 'black',
        lineHeight: 30,
        marginLeft:20,
        marginRight:20,
      }}>
        Admin Dashboard for managing candidates(registring of candidates) and viewing results.
        The purpose of this position is to perform the duties and functions of the Voter
        Registrar, the duties and functions placed on the County Clerk by the Election Code or by Statutes
        outside the Election Code, and to direct and manage all elections held in Hardin County. The
        Elections Administrator maintains compliance with Federal and State laws specified in the Texas
        Election Code. This position is appointed by and reports to the County Election Commission or
        its designee.
      </Text>

      {/* <TouchableOpacity 
          onPress={() => navigation.navigate('login')}
          style={{
            backgroundColor: 'blue',
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
        </TouchableOpacity> */}
    </View> 

  );
}