import { useState, useEffect, useTransition } from 'react';
import { Name, fetchNameList, PostName } from '../api/api';
import { isNameValid } from '../utils/validator';
import { UseNameFormProps } from '../types/type';



export const useNameForm = ({ triggerToast }: UseNameFormProps) => {
  const [name, setName] = useState<string>('');
  const [nameList, setNameList] = useState<Name[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isFormPending, startTransition] = useTransition();

  const setErrorWithTimeout = (message: string) => {
    setError(message);
    setTimeout(() => setError(null), 2500);
  };

  const addNameAsync = async () => {
    const validationError = isNameValid(name);
    if (validationError) {
      setErrorWithTimeout(validationError);
      return;
    }
  
    setError(null);
    setIsLoading(true);
  
    try {
      const response = await PostName(name);
      setNameList(response.data.list);
      setName('');
      triggerToast(response.message, "success");
    } catch (error) {
      console.error("Failed to add name:", error);
      triggerToast("Failed to add name", "error");
    } finally {
      setIsLoading(false);
    }
  };
  
  const addName = () => {
    startTransition(() => {
      addNameAsync();
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await fetchNameList();
        console.log(response);
        triggerToast(response.message, "success");
        setNameList(response.data.list);
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        console.error("Failed to fetch names:", error);
        triggerToast("Failed to fetch names", "error");
      }
    };
  
    fetchData();
  }, []);
  

  return {
    name,
    setName,
    nameList,
    isLoading,
    error,
    addName,
    isFormPending
  };
};
