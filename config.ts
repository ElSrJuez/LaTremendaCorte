// config.ts  
import configData from './models.json';  
  
// Define the Config interface  
interface Config {  
  Endpoint: string;  
  Deployment: string;  
  Model: string;  
  ApiKEY: string;  
  APIVersion: string;  
  MaxTokenParam: string; // Added MaxTokenParam to the interface  
}  
  
// Explicitly type configData as Config[]  
const configs = configData as Config[];  
  
// Select the first configuration (you can change this logic as needed)  
const config = configs[0];  
  
// Export the constants using the selected configuration  
export const AZURE_OPENAI_API_KEY = config.ApiKEY;  
export const AZURE_OPENAI_API_URL = config.Endpoint;  
export const AZURE_OPENAI_DEPLOYMENT_NAME = config.Deployment;  
export const AZURE_OPENAI_API_VERSION = config.APIVersion;  
export const AZURE_OPENAI_MAX_TOKEN_PARAM = config.MaxTokenParam; // Export MaxTokenParam  