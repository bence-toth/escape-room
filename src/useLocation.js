import { useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";

const useLocation = () => {
  const location = useMemo(
    () => localStorage.getItem("game-location") || "/",
    []
  );

  const navigate = useNavigate();

  const navigateRef = useRef(navigate);

  useEffect(() => {
    navigateRef.current(location);
  }, [location]);
};

export default useLocation;
