import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

export default function Login() {
  return (
    <View style={{ alignItems: 'center' }}>
      <Image
        source={require('/Users/hugo/officialprojects/AwesomeProject/assets/images/login.png')}
        style={styles.loginImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  loginImage: {
    width: 230,
    height: 450,
    marginTop: 70,
    borderWidth: 4, // Corrected from 'borderwidth' to 'borderWidth'
    borderColor: '#000',
  },
});
