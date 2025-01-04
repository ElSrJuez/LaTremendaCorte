import axios from 'axios';  
import {  
  AZURE_OPENAI_API_KEY,  
  AZURE_OPENAI_API_URL,  
  AZURE_OPENAI_DEPLOYMENT_NAME,  
} from '../config';  
  
interface OpenAIResponseMessage {  
  content: string;  
  // You can add more properties if needed  
}  
  
interface OpenAIResponse {  
  choices: { message: OpenAIResponseMessage }[];  
}  
  
const openAI = axios.create({  
  baseURL: AZURE_OPENAI_API_URL, // Ensure no trailing slash  
  headers: {  
    'Content-Type': 'application/json',  
    'api-key': AZURE_OPENAI_API_KEY,  
  },  
});  
  
export const generateText = async (prompt: string): Promise<string> => {  
  try {  
    const url = `openai/deployments/${AZURE_OPENAI_DEPLOYMENT_NAME}/chat/completions?api-version=2023-05-15`;  
    console.log('Sending request to Azure OpenAI API at URL:', `${AZURE_OPENAI_API_URL}/${url}`);  
    const response = await openAI.post<OpenAIResponse>(url, {  
      messages: [{ role: 'user', content: prompt }],  
      max_tokens: 150,  
    });  
    console.log('Received response from Azure OpenAI API:', response.data);  
    return response.data.choices[0].message.content.trim();  
  } catch (error) {  
    console.error('Error generating text:', error);  
    if (axios.isAxiosError(error)) {  
      console.error('Axios error message:', error.message);  
      console.error('Axios error response:', error.response?.data);  
    }  
    throw error;  
  }  
};  