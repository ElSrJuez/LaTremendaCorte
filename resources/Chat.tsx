// Chat.tsx  
import React, { useState } from 'react';  
import {  
  View,  
  Text,  
  TextInput,  
  Button,  
  KeyboardAvoidingView,  
  Platform,  
  TouchableWithoutFeedback,  
  Keyboard,  
  ScrollView,  
} from 'react-native';  
import Colors from './Colors';  
import styles from './Styles'; // Import the shared styles  
import { generateText } from './OpenAIService'; // Import your OpenAI service  
  
const Chat: React.FC = () => {  
  const [prompt, setPrompt] = useState<string>('');  
  const [result, setResult] = useState<string>('');  
  const [loading, setLoading] = useState<boolean>(false);  
  const [error, setError] = useState<string>('');  
  
  const textColor = Colors.text;  
  const placeholderTextColor = Colors.placeholder;  
  
  const handleGenerateText = async () => {  
    if (!prompt.trim()) return;  
    setLoading(true);  
    setError('');  
    try {  
      const response = await generateText(prompt);  
      setResult(response);  
    } catch (error) {  
      console.error('Error generating text:', error);  
      setError('Failed to generate text. Please try again.');  
    } finally {  
      setLoading(false);  
    }  
  };  
  
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
          <View style={styles.chatContainer}>  
            <Text style={[styles.heading, { color: textColor }]}>  
              AI Chat  
            </Text>  
            <TextInput  
              style={[  
                styles.input,  
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
              <Text style={styles.errorText}>{error}</Text>  
            ) : null}  
            {result ? (  
              <View style={styles.resultContainer}>  
                <Text style={[styles.resultHeading, { color: textColor }]}>  
                  Response:  
                </Text>  
                <Text style={[styles.resultText, { color: textColor }]}>  
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