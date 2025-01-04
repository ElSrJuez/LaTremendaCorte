// OpenAIService.ts  
  
import axios from 'axios';  
import { Model } from './ModelContext';  
  
interface OpenAIResponseMessage {  
  content: string;  
}  
  
interface OpenAIResponse {  
  choices: { message: OpenAIResponseMessage }[];  
}  
  
export const generateText = async (  
  prompt: string,  
  selectedModel: Model  
): Promise<string> => {  
  try {  
    // Construct the API URL using the model's endpoint, deployment, and API version  
    const url = `${selectedModel.Endpoint}/openai/deployments/${selectedModel.Deployment}/chat/completions?api-version=${selectedModel.APIVersion}`;  
    console.log('Sending request to Azure OpenAI API at URL:', url);  
  
    // Initialize the payload with the 'messages' parameter  
    const payload: any = {  
      messages: [{ role: 'user', content: prompt }],  
    };  
  
    // Set the appropriate max token parameter and value  
    const maxTokensValue =  
      selectedModel.MaxTokenParam === 'max_tokens' ? 150 : 5000; // Adjust values as needed  
    payload[selectedModel.MaxTokenParam] = maxTokensValue;  
  
    // Adjust payload based on the API version and model  
    if (selectedModel.APIVersion === '2024-09-01-preview') {  
      // For 'o1-preview' model with API version '2024-09-01-preview'  
      // Do not include unsupported parameters like 'temperature' and 'top_p'  
      console.log('Using payload for o1-preview model:', payload);  
    } else {  
      // For other models, include standard parameters  
      payload.temperature = 0.7; // Adjust as needed  
      payload.top_p = 1;  
      // Add any other standard parameters you use  
      console.log('Using payload for standard model:', payload);  
    }  
  
    // Make the API call  
    const response = await axios.post<OpenAIResponse>(url, payload, {  
      headers: {  
        'Content-Type': 'application/json',  
        'api-key': selectedModel.ApiKEY,  
      },  
    });  
  
    console.log('Received response from Azure OpenAI API:', response.data);  
  
    // Extract the generated text from the response  
    const generatedText = response.data.choices[0].message.content.trim();  
    return generatedText;  
  } catch (error) {  
    console.error('Error generating text:', error);  
    if (axios.isAxiosError(error)) {  
      console.error('Axios error message:', error.message);  
      console.error('Axios error response:', error.response?.data);  
    }  
    throw error;  
  }  
};  