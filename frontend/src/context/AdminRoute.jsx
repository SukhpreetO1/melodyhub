import { axios, useNavigate, BACKEND_PROTECTED_ROUTE, AdminRoutePropType, getTokenFromCookie, ADMIN_HOMEPAGE, USERS_HOMEPAGE } from "../routes/routes.jsx";
import { useEffect, useState } from "react";

const AdminRoute = ({ children }) => {
  const navigate = useNavigate();
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = getTokenFromCookie('admin_token');
        if (token) {          
          const response = await axios.get(BACKEND_PROTECTED_ROUTE, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });          
          if (response.status == 200) {
            setHasToken(true);
            navigate(ADMIN_HOMEPAGE, { replace: true });
          } else {
            setHasToken(false);
            navigate(USERS_HOMEPAGE, { replace: true });
          }
        } else {
          setHasToken(false);
          navigate(USERS_HOMEPAGE, { replace: true });
        }
      } catch (error) {
        setHasToken(false);
        navigate(USERS_HOMEPAGE, { replace: true });
      }
    };

    checkToken();
  }, []);

  return !hasToken ? children : null;
};

AdminRoute.propTypes = AdminRoutePropType;
export default AdminRoute;