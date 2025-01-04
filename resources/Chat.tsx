// Chat.tsx  
  
import React, { useState, useContext } from 'react';  
import {  
  View, Text,  
  TextInput,  
  Button,  
  KeyboardAvoidingView,  
  Platform,  
  TouchableWithoutFeedback,  
  Keyboard,  
  ScrollView,  
} from 'react-native';  
import Colors from './Colors';  
import { baseStyles, profileStyles } from './Styles';  
import { generateText } from './OpenAIService';  
import { ModelContext } from './ModelContext';  
  
interface ChatProps {  
  profile: 'computer' | 'portrait' | 'landscape';  
}  
  
const Chat: React.FC<ChatProps> = ({ profile }) => {  
  const [prompt, setPrompt] = useState<string>('');  
  const [result, setResult] = useState<string>('');  
  const [loading, setLoading] = useState<boolean>(false);  
  const [error, setError] = useState<string>('');  
  
  // Access the selected model from context  
  const modelContext = useContext(ModelContext);  
  if (!modelContext) {  
    throw new Error('ModelContext is not provided');  
  }  
  const { selectedModel } = modelContext;  
  
  const textColor = Colors.text;  
  const placeholderTextColor = Colors.placeholder;  
  
  const handleGenerateText = async () => {  
    if (!prompt.trim()) return;  
    setLoading(true);  
    setError('');  
    try {  
      const response = await generateText(prompt, selectedModel);  
      setResult(response);  
    } catch (error) {  
      console.error('Error generating text:', error);  
      setError('Failed to generate text. Please try again.');  
    } finally {  
      setLoading(false);  
    }  
  };  
  
  const chatStyles = profileStyles[profile] || profileStyles.computer;  
  
  return (  
    <KeyboardAvoidingView  
      style={{ flex: 1 }}  
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}  
    >  
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>  
        <ScrollView  
          contentInsetAdjustmentBehavior="automatic"  
          contentContainerStyle={{ flexGrow: 1 }}  
          style={{ flex: 1 }}  
        >  
          <View style={chatStyles.chatContainer}>  
            <TextInput  
              style={[  
                chatStyles.input,  
                {  
                  color: textColor,  
                  backgroundColor: Colors.white,  
                },  
              ]}  
              placeholder="Enter your prompt"  
              placeholderTextColor={placeholderTextColor}  
              value={prompt}  
              onChangeText={setPrompt}  
              multiline  
            />  
            <Button  
              title={loading ? 'Generating...' : 'Generate Text'}  
              onPress={handleGenerateText}  
              disabled={loading}  
              color={Colors.primary}  
            />  
            {error ? (  
              <Text style={baseStyles.errorText}>{error}</Text>  
            ) : null}  
            {result ? (  
              <View style={chatStyles.resultContainer}>  
                <Text style={[baseStyles.resultHeading, { color: textColor }]}>  
                  Response:  
                </Text>  
                <Text style={[baseStyles.resultText, { color: textColor }]}>  
                  {result}  
                </Text>  
              </View>  
            ) : null}  
          </View>  
        </ScrollView>  
      </TouchableWithoutFeedback>  
    </KeyboardAvoidingView>  
  );  
};  
  
export default Chat;  