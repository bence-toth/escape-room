import { useState } from "react";

const useMessage = () => {
  const [message, setMessage] = useState("");
  const [messageTimeout, setMessageTimeout] = useState(null);

  const updateMessage = (newMessage) => {
    if (messageTimeout) {
      clearTimeout(messageTimeout);
    }
    setMessage(newMessage);

    let timeout = setTimeout(() => {
      setMessage("");
    }, 5000);

    setMessageTimeout(timeout);
  };

  return { message, updateMessage };
};

export default useMessage;
