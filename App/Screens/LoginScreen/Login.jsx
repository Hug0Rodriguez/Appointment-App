import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Colors  from '/Users/hugo/officialprojects/AwesomeProject/App/Utils/Colors.js';
import React from 'react';

export default function Login() {
  return (
    <View style={{ alignItems: 'center' }}>
      <Image
        source={require('/Users/hugo/officialprojects/AwesomeProject/assets/images/login.png')}
        style={styles.loginImage}
      />
      <View style={styles.subContainer}>
        <Text style={{fontSize:27,color:Colors.WHITE,
          textAlign:'center'}}>
          Let's Find
          <Text style={{fontWeight:'bold'}}> Professionals Cleaning and repair services near you</Text>
        </Text>
        <Text style={{fontSize:17,color:Colors.WHITE,
        textAlign:'center',marginTop:20}}>Best App to find services near you which deliver you a professional Service </Text>
        <TouchableOpacity style={styles.button} onPress={()=>console.log("Button Click")}>
          <Text style={{textAlign:'center',
          fontSize:17,
          color:Colors.PRIMARY
        }}>Let's Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginImage: {
    width: 230,
    height: 450,
    marginTop: 70,
    borderWidth: 4, // Corrected from 'borderwidth' to 'borderWidth'
    borderColor:Colors.BLACK,
    borderRadius:15
  },
  subContainer: {
    width: '100%',
    backgroundColor: Colors.PRIMARY,
    height: '70%',
    marginTop:-20,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    padding: 20,
  },
  button: {
    padding:15,
    backgroundColor: Colors.WHITE,
    borderRadius: 99,
    marginTop:40
  }
});
