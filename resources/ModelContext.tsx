// resources/ModelContext.tsx  
  
import React from 'react';  
  
export interface Model {  
  Endpoint: string;  
  Deployment: string;  
  Model: string;  
  ApiKEY: string;  
  APIVersion: string;  
  MaxTokenParam: string; // Added MaxTokenParam to the interface  
}  
  
interface ModelContextType {  
  selectedModel: Model;  
  setSelectedModel: React.Dispatch<React.SetStateAction<Model>>;  
}  
  
export const ModelContext = React.createContext<ModelContextType | undefined>(undefined);  