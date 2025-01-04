// Header.tsx  
import React from 'react';  
import { View, Text, Image } from 'react-native';  
import Colors from './Colors';  
import { baseStyles, profileStyles } from './Styles'; // Use named imports  
  
const Header = () => {  
  return (  
    <View style={baseStyles.headerContainer}>  
      <Image  
        source={require('./assets/LaTremendaCorteApp.png')}  
        style={baseStyles.headerImage}  
        resizeMode="contain"  
      />  
      <Text style={baseStyles.headerTitle}>La Tremenda Corte Chat</Text>  
    </View>  
  );  
};  
  
export default Header;  