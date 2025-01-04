// OpenAIService.ts  
  
import axios from 'axios';  
import { Model } from './ModelContext';  
  
interface OpenAIResponseMessage {  
  content: string;  
}  
  
interface OpenAIResponse {  
  choices: { message: OpenAIResponseMessage }[];  
}  
  
export const generateText = async (prompt: string, selectedModel: Model): Promise<string> => {  
  try {  
    const url = `${selectedModel.Endpoint}/openai/deployments/${selectedModel.Deployment}/chat/completions?api-version=2023-05-15`;  
    console.log('Sending request to Azure OpenAI API at URL:', url);  
  
    const response = await axios.post<OpenAIResponse>(  
      url,  
      {  
        messages: [{ role: 'user', content: prompt }],  
        max_tokens: 150,  
      },  
      {  
        headers: {  
          'Content-Type': 'application/json',  
          'api-key': selectedModel.ApiKEY,  
        },  
      }  
    );  
  
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