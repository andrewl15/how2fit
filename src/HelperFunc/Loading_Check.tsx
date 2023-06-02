import { useEffect, useState } from 'react';


export const useLoading = () => {
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 750);
    }, []);
  
    return isLoading;
};