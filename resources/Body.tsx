// Body.tsx  
  
import React, { useState } from 'react';  
import { View, Text, ScrollView } from 'react-native';  
import { Picker } from '@react-native-picker/picker';  
import Colors from './Colors';  
import { baseStyles } from './Styles';  
import modelsData from '../models.json';  
import { ModelContext, Model } from './ModelContext';  
  
interface BodyProps {  
  profile: 'computer' | 'portrait' | 'landscape';  
  setProfile: React.Dispatch<React.SetStateAction<'computer' | 'portrait' | 'landscape'>>;  
  children: React.ReactNode;  
}  
  
const Body: React.FC<BodyProps> = ({ profile, setProfile, children }) => {  
  // Manage selected model state within the component  
  const [selectedModel, setSelectedModel] = useState<Model>(modelsData[0]);  
  
  return (  
    <ModelContext.Provider value={{ selectedModel, setSelectedModel }}>  
      <View style={{ paddingHorizontal: 16, paddingTop: 16 }}>  
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>  
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
        {/* Model Picker */}  
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16 }}>  
          <Text style={[baseStyles.heading, { color: Colors.text, marginRight: 16 }]}>  
            Select an AI Model:  
          </Text>  
          <Picker  
            selectedValue={selectedModel.Model}  
            onValueChange={(itemValue) => {  
              const model = modelsData.find((m) => m.Model === itemValue);  
              if (model) {  
                setSelectedModel(model);  
              }  
            }}  
            style={{ flex: 1, color: Colors.text }}  
          >  
            {modelsData.map((model, index) => (  
              <Picker.Item key={index} label={model.Model} value={model.Model} />  
            ))}  
          </Picker>  
        </View>  
      </View>  
      {children}  
    </ModelContext.Provider>  
  );  
};  
  
export default Body;  