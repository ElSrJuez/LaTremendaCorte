// Header.tsx  
import React from 'react';  
import { View, Text, Image } from 'react-native';  
import Colors from './Colors';  
import styles, { FontSizes, FontWeights, Spacing } from './Styles';  
  
const Header = () => {  
  return (  
    <View style={styles.headerContainer}>  
      <Image  
        source={require('./assets/LaTremendaCorteApp.png')}  
        style={styles.headerImage}  
        resizeMode="contain"  
      />  
      <Text style={styles.headerTitle}>La Tremenda Corte Chat</Text>  
    </View>  
  );  
};  
  
export default Header;  