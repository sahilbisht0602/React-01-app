import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    // const handleOnline = () => {
    //   setIsOnline(true);
    // };
    // const handleOffline = () => {
    //   setIsOnline(false);
    // };
    window.addEventListener("online", () => {
      setIsOnline(true);
    });
    window.addEventListener("offline", () => {
      setIsOnline(false);
    });
  }, []);

  return isOnline;
};

export default useOnline;
