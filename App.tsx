/**    
 * App.tsx  
 */  
  
import React, { useState } from 'react';  
import {  
  SafeAreaView,  
  StatusBar,  
} from 'react-native';  
  
import Colors from './resources/Colors';  
import Header from './resources/Header';  
import Body from './resources/Body';  
import Chat from './resources/Chat';  
  
function App(): React.JSX.Element {  
  const [profile, setProfile] = useState<'computer' | 'portrait' | 'landscape'>('computer');  
  
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
      {/* Body Component */}  
      <Body profile={profile} setProfile={setProfile}>  
        {/* Chat Component */}  
        <Chat profile={profile} />  
      </Body>  
    </SafeAreaView>  
  );  
}  
  
export default App;  