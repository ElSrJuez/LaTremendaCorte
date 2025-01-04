/**  
 * App.tsx  
 */  
  
import React from 'react';  
import { SafeAreaView, StatusBar, View } from 'react-native';  
  
import Colors from './resources/Colors';  
import Header from './resources/Header';  
import Chat from './resources/Chat';  
import styles from './resources/Styles'; // Import shared styles  
  
function App(): React.JSX.Element {  
  const backgroundStyle = {  
    backgroundColor: Colors.background,  
    flex: 1,  
  };  
  
  return (  
    <SafeAreaView style={backgroundStyle}>  
      <StatusBar  
        barStyle="dark-content"  
        backgroundColor={Colors.background}  
      />  
      {/* Custom Header */}  
      <Header />  
      {/* Chat Component */}  
      <View style={{ flex: 1 }}>  
        <Chat />  
      </View>  
    </SafeAreaView>  
  );  
}  
  
export default App;  