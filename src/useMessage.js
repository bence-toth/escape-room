import { useState, useRef } from "react";

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
    }, 3000);

    setMessageTimeout(timeout);
  };

  const updateMessageRef = useRef(updateMessage);

  return { message, updateMessage: updateMessageRef.current };
};

export default useMessage;
