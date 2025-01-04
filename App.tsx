/**  
 * App.tsx  
 */  
  
import React, { useState } from 'react';  
import type { PropsWithChildren } from 'react';  
import {  
  SafeAreaView,  
  ScrollView,  
  StatusBar,  
  StyleSheet,  
  Text,  
  useColorScheme,  
  View,  
  TextInput,  
  Button,  
  KeyboardAvoidingView,  
  Platform,  
  TouchableWithoutFeedback,  
  Keyboard,  
} from 'react-native';  
  
import Colors from './resources/Colors';  
import Header from './resources/Header';  
  
import { generateText } from './OpenAIService';  
  
function App(): React.JSX.Element {  
  const isDarkMode = useColorScheme() === 'dark';  
  
  const [prompt, setPrompt] = useState<string>('');  
  const [result, setResult] = useState<string>('');  
  const [loading, setLoading] = useState<boolean>(false);  
  const [error, setError] = useState<string>('');  
  
  const backgroundStyle = {  
    backgroundColor: Colors.background,  
    flex: 1,  
  };  
  
  const textColor = Colors.text;  
  const placeholderTextColor = '#666666';  
  
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
    <SafeAreaView style={backgroundStyle}>  
      <StatusBar  
        barStyle="dark-content"  
        backgroundColor={backgroundStyle.backgroundColor}  
      />  
      <KeyboardAvoidingView  
        style={{ flex: 1 }}  
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}  
      >  
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>  
          <ScrollView  
            contentInsetAdjustmentBehavior="automatic"  
            style={backgroundStyle}  
            contentContainerStyle={{ flexGrow: 1 }}  
          >  
            {/* Custom Header */}  
            <Header />  
  
            {/* Chat App UI */}  
            <View style={styles.chatContainer}>  
              <Text style={[styles.heading, { color: textColor }]}>  
                AI Chat  
              </Text>  
              <TextInput  
                style={[  
                  styles.input,  
                  {  
                    color: textColor,  
                    backgroundColor: '#FFFFFF',  
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
                  <Text  
                    style={[styles.resultHeading, { color: textColor }]}  
                  >  
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
    </SafeAreaView>  
  );  
}  
  
const styles = StyleSheet.create({  
  // Chat app styles  
  chatContainer: {  
    paddingHorizontal: 24,  
    paddingTop: 32,  
  },  
  heading: {  
    fontSize: 24,  
    fontWeight: '600',  
    marginBottom: 16,  
  },  
  input: {  
    borderWidth: 1,  
    borderColor: '#cccccc',  
    borderRadius: 8,  
    padding: 12,  
    marginBottom: 12,  
    minHeight: 60,  
    textAlignVertical: 'top',  
  },  
  errorText: {  
    color: 'red',  
    marginTop: 8,  
  },  
  resultContainer: {  
    marginTop: 16,  
  },  
  resultHeading: {  
    fontSize: 18,  
    fontWeight: 'bold',  
  },  
  resultText: {  
    fontSize: 16,  
    marginTop: 8,  
  },  
});  
  
export default App;  