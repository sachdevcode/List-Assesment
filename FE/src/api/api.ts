import { BASEURL, ENDPOINTS } from "../utils/constant";

export interface Name {
    _id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  
  interface FetchNameListResponse {
    statusCode: number;
    data: {
      list: Name[];
    };
    message: string;
  }
  

  export const fetchNameList = async (): Promise<FetchNameListResponse> => {
    const response = await fetch(`${BASEURL}${ENDPOINTS.LIST}`);
    if (!response.ok) {
      throw new Error('Failed to fetch name list');
    }
    return response.json();
  };

  export const PostName = async (name: string): Promise<FetchNameListResponse> => {
    const response = await fetch(`${BASEURL}${ENDPOINTS.LIST}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name })
    });
  
    if (!response.ok) {
      throw new Error('Failed to post name');
    }
  
    return response.json();
  };
  
  
  