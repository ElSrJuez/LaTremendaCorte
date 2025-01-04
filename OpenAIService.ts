// OpenAIService.ts  
import axios from 'axios';  
import { OPENAI_API_KEY, OPENAI_API_URL } from './config';  
  
interface OpenAIResponseChoice {  
  text: string;  
  // You can add more properties if needed  
}  
  
interface OpenAIResponse {  
  choices: OpenAIResponseChoice[];  
}  
  
const openAI = axios.create({  
  baseURL: OPENAI_API_URL,  
  headers: {  
    'Content-Type': 'application/json',  
    Authorization: `Bearer ${OPENAI_API_KEY}`,  
  },  
});  
  
export const generateText = async (prompt: string): Promise<string> => {  
  try {  
    const response = await openAI.post<OpenAIResponse>('/completions', {  
      model: 'text-davinci-003',  
      prompt: prompt,  
      max_tokens: 150,  
    });  
    return response.data.choices[0].text.trim();  
  } catch (error) {  
    console.error('Error generating text:', error);  
    throw error;  
  }  
};  