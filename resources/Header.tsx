// Header.tsx  
import React from 'react';  
import { View, Text, StyleSheet, Image } from 'react-native';  
import Colors from './Colors';  
  
const Header = () => {  
  return (  
    <View style={styles.headerContainer}>  
      <Image  
        source={require('./assets/LaTremendaCorteApp.png')} // Place your image in the 'assets' folder  
        style={styles.headerImage}  
        resizeMode="contain"  
      />  
      <Text style={styles.headerTitle}>La Tremenda Corte Chat</Text>  
    </View>  
  );  
};  
  
const styles = StyleSheet.create({  
  headerContainer: {  
    backgroundColor: Colors.headerBackground,  
    paddingVertical: 20,  
    alignItems: 'center',  
  },  
  headerImage: {  
    width: 100,  
    height: 100,  
    marginBottom: 10,  
  },  
  headerTitle: {  
    color: '#FFFFFF',  
    fontSize: 24,  
    fontWeight: 'bold',  
  },  
});  
  
export default Header;  