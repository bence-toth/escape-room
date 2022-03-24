import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useNavigation = () => {
  const [isCanvasRendered, setIsCanvasRendered] = useState(true);

  const nativeNavigate = useNavigate();

  const navigate = (location) => {
    if (isCanvasRendered) {
      setIsCanvasRendered(false);
      setTimeout(() => {
        nativeNavigate(location);
        setTimeout(() => {
          setIsCanvasRendered(true);
        }, 150);
      }, 150);
    }
  };

  return { navigate, isCanvasRendered };
};

export default useNavigation;
