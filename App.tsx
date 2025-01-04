/**  
 * App.tsx  
 */  
  
import React, { useState } from 'react';  
import {  
  SafeAreaView,  
  StatusBar,  
  View,  
  Text,  
} from 'react-native';  
  
import { Picker } from '@react-native-picker/picker';  
  
import Colors from './resources/Colors';  
import Header from './resources/Header';  
import Chat from './resources/Chat';  
import { baseStyles } from './resources/Styles'; // Use named imports  
  
function App(): React.JSX.Element {  
  const [profile, setProfile] = useState<'computer' | 'portrait' | 'landscape'>(  
    'computer'  
  );  
  
  const backgroundStyle = {  
    backgroundColor: Colors.background,  
    flex: 1,  
  };  
  
  /**  
   * Body Component  
   * This component will contain the "AI Chat" heading and the Picker  
   */  
  const Body: React.FC = () => {  
    return (  
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingTop: 16 }}>  
        <Text style={[baseStyles.heading, { color: Colors.text, marginRight: 16 }]}>  
          AI Chat  
        </Text>  
        <Picker  
          selectedValue={profile}  
          onValueChange={(itemValue) => setProfile(itemValue)}  
          style={{ flex: 1, color: Colors.text }}  
        >  
          <Picker.Item label="Computer/Tablet" value="computer" />  
          <Picker.Item label="Portrait" value="portrait" />  
          <Picker.Item label="Landscape" value="landscape" />  
        </Picker>  
      </View>  
    );  
  };  
  
  return (  
    <SafeAreaView style={backgroundStyle}>  
      <StatusBar  
        barStyle="dark-content"  
        backgroundColor={Colors.background}  
      />  
      {/* Custom Header */}  
      <Header />  
      {/* Body Component */}  
      <Body />  
      {/* Chat Component */}  
      <View style={{ flex: 1 }}>  
        <Chat profile={profile} />  
      </View>  
    </SafeAreaView>  
  );  
}  
  
export default App;  