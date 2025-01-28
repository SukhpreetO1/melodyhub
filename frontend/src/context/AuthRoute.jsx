import { axios, useNavigate, BACKEND_PROTECTED_ROUTE, AuthRoutePropType, getTokenFromCookie, USERS_HOMEPAGE } from "../routes/routes.jsx";
import { useEffect, useState } from "react";

const AuthRoute = ({ children }) => {
  const navigate = useNavigate();
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = getTokenFromCookie('token');
        const response = await axios.get(BACKEND_PROTECTED_ROUTE, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
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
      navigate(USERS_HOMEPAGE, { replace: true });
    }
  }, [hasToken, navigate]);

  return !hasToken ? children : null;
};

AuthRoute.propTypes = AuthRoutePropType;
export default AuthRoute;