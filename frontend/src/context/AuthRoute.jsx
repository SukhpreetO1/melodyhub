import { axios, useNavigate, BACKEND_PROTETED_ROUTE, AuthRoutePropType } from "../routes/routes.jsx";
import { useEffect, useState } from "react";

const AuthRoute = ({ children }) => {
  const navigate = useNavigate();
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const response = await axios.get(BACKEND_PROTETED_ROUTE, {
          credentials: 'include',
        });
        
        if (response.status == 200) {
          setHasToken(true);
        } else {
          setHasToken(false);
        }
      } catch (error) {
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

AuthRoute.propTypes = AuthRoutePropType;

export default AuthRoute;