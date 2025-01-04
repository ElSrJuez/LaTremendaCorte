// Body.tsx  
import React from 'react';  
import { View, Text } from 'react-native';  
import { Picker } from '@react-native-picker/picker';  
import Colors from './Colors';  
import { baseStyles } from './Styles';  
  
interface BodyProps {  
  profile: 'computer' | 'portrait' | 'landscape';  
  setProfile: React.Dispatch<React.SetStateAction<'computer' | 'portrait' | 'landscape'>>;  
}  
  
const Body: React.FC<BodyProps> = ({ profile, setProfile }) => {  
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
  
export default Body;  