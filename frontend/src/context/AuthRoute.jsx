import { axios, useNavigate, MONGODB_API_PROTETED_ROUTE } from "../routes/routes.jsx";
import { useEffect, useState } from "react";

const AuthRoute = ({ children }) => {
  const navigate = useNavigate();
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const response = await axios.get(MONGODB_API_PROTETED_ROUTE, {
          credentials: 'include',
        });
        console.log(response);
        
        if (response.ok) {
          setHasToken(true);
        } else {
          setHasToken(false);
        }
      } catch (error) {
        console.error("Error checking token:", error);
        setHasToken(false);
      }
    };

    checkToken();
  }, []);

  useEffect(() => {
    if (hasToken) {
      navigate("/", { replace: true });
    }
  }, [hasToken, navigate]);

  return !hasToken ? children : null;
};

export default AuthRoute;