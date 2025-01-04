/**  
 * Sample React Native App  
 * https://github.com/facebook/react-native  
 * @format  
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
  
import {  
  Colors,  
  DebugInstructions,  
  Header,  
  LearnMoreLinks,  
  ReloadInstructions,  
} from 'react-native/Libraries/NewAppScreen';  
  
import { generateText } from './OpenAIService';  
  
type SectionProps = PropsWithChildren<{  
  title: string;  
}>;  
  
function Section({ children, title }: SectionProps): React.JSX.Element {  
  const isDarkMode = useColorScheme() === 'dark';  
  const textColor = isDarkMode ? Colors.white : Colors.black;  
  const descriptionColor = isDarkMode ? Colors.light : Colors.dark;  
  return (  
    <View style={styles.sectionContainer}>  
      <Text  
        style={[  
          styles.sectionTitle,  
          {  
            color: textColor,  
          },  
        ]}  
      >  
        {title}  
      </Text>  
      <Text  
        style={[  
          styles.sectionDescription,  
          {  
            color: descriptionColor,  
          },  
        ]}  
      >  
        {children}  
      </Text>  
    </View>  
  );  
}  
  
function App(): React.JSX.Element {  
  const isDarkMode = useColorScheme() === 'dark';  
  
  const [prompt, setPrompt] = useState<string>('');  
  const [result, setResult] = useState<string>('');  
  const [loading, setLoading] = useState<boolean>(false);  
  const [error, setError] = useState<string>('');  
  
  const backgroundStyle = {  
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,  
    flex: 1,  
  };  
  
  const textColor = isDarkMode ? Colors.white : Colors.black;  
  const placeholderTextColor = isDarkMode ? Colors.light : Colors.dark;  
  const contentBackgroundColor = isDarkMode ? Colors.black : Colors.white;  
  
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
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}  
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
            {/* Chat App UI */}  
            <View style={styles.chatContainer}>  
              <Text  
                style={[  
                  styles.heading,  
                  {  
                    color: textColor,  
                  },  
                ]}  
              >  
                AI Chat  
              </Text>  
              <TextInput  
                style={[  
                  styles.input,  
                  {  
                    color: textColor,  
                    backgroundColor: contentBackgroundColor,  
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
              />  
              {error ? (  
                <Text style={styles.errorText}>{error}</Text>  
              ) : null}  
              {result ? (  
                <View style={styles.resultContainer}>  
                  <Text  
                    style={[  
                      styles.resultHeading,  
                      {  
                        color: textColor,  
                      },  
                    ]}  
                  >  
                    Response:  
                  </Text>  
                  <Text  
                    style={[  
                      styles.resultText,  
                      {  
                        color: textColor,  
                      },  
                    ]}  
                  >  
                    {result}  
                  </Text>  
                </View>  
              ) : null}  
            </View>  
  
            {/* Existing Sample App Content */}  
            <View  
              style={{  
                backgroundColor: contentBackgroundColor,  
              }}  
            >  
              <Header />  
              <Section title="Step One">  
                Edit <Text style={styles.highlight}>App.tsx</Text> to change this  
                screen and then come back to see your edits.  
              </Section>  
              <Section title="See Your Changes">  
                <ReloadInstructions />  
              </Section>  
              <Section title="Debug">  
                <DebugInstructions />  
              </Section>  
              <Section title="Learn More">  
                Read the docs to discover what to do next:  
              </Section>  
              <LearnMoreLinks />  
            </View>  
          </ScrollView>  
        </TouchableWithoutFeedback>  
      </KeyboardAvoidingView>  
    </SafeAreaView>  
  );  
}  
  
const styles = StyleSheet.create({  
  // Existing styles  
  sectionContainer: {  
    marginTop: 32,  
    paddingHorizontal: 24,  
  },  
  sectionTitle: {  
    fontSize: 24,  
    fontWeight: '600',  
  },  
  sectionDescription: {  
    marginTop: 8,  
    fontSize: 18,  
    fontWeight: '400',  
  },  
  highlight: {  
    fontWeight: '700',  
  },  
  
  // New styles for the chat app  
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