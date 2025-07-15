// src/hooks/useNavigationLoader.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false });

const useNavigationLoader = () => {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();
    // Simulate some delay (optional)
    const timeout = setTimeout(() => {
      NProgress.done();
    }, 400);

    return () => clearTimeout(timeout);
  }, [location.pathname]);
};

export default useNavigationLoader;
