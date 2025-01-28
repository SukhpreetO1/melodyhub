import { useState, useContext } from "react";
import { InputField, PasswordField, SubmitButton, validate_login_submit_form, axios, BACKEND_LOGIN, toast, NavLink, USERS_SIGNUP, useNavigate, USERS_HOMEPAGE, ADMIN_HOMEPAGE, BACKEND_ERROR, USERS_FORGOT_PASSWORD, LOGO_URL, EmailGlobalContext } from "../routes/routes.jsx";

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [disabled, setDisabled] = useState(false);
  const { setEmail } = useContext(EmailGlobalContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const validation_errors = validate_login_submit_form({ ...formData, [name]: value });
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    setErrors(prevErrors => ({ ...prevErrors, [name]: validation_errors[name] || null }));
  };

  const handleClick = () => setDisabled(true);
  const navigate = useNavigate();

  const submitLoginForm = async (e) => {
    e.preventDefault();
    const validation_errors = validate_login_submit_form(formData);    
    if (Object.keys(validation_errors).length === 0) {
      try {
        setDisabled(true);
        const response = await axios.post(BACKEND_LOGIN, formData);
        setDisabled(false);
        toast.success("Login successfully.");
        setEmail(response.data.user.email);
        response.data.roleName == "User" ? navigate(USERS_HOMEPAGE) : navigate(ADMIN_HOMEPAGE);
      }
      catch (err) {
        setDisabled(false);
        toast.error("Invalid credential.");
        const errorData = {
          error: err.message,
          message: `Login Error : Invalid credential. ${err.message}`,
          timestamp: new Date().toISOString()
        };
        axios.post(BACKEND_ERROR, errorData);
      }
    } else {
      setErrors(validation_errors);
    }
  }

  return (
    <>
      <div className="min-h-screen min-w-full flex flex-col items-center pt-20 p-6">
        <div className="w-full max-w-96 overflow-y-auto">
          <div className="mb-8 sm:mb-12">
            <NavLink to={USERS_HOMEPAGE} className="flex items-center justify-center space-x-3 rtl:space-x-reverse">
              <img src={LOGO_URL} className="h-32 rounded-full w-32 mb-4" alt="Flowbite Logo" />
            </NavLink>
            <div className="text-4xl sm:text-4xl font-medium mb-8 text-center">
              <h1>Login to MelodyHub</h1>
            </div>
            <div className="w-80 ml-8">
              <button className="p-4 border-2 border-slate-400 rounded-full text-center hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 w-full sm:overflow-hidden">
                Continue with phone number
              </button>
            </div>
          </div>
          <hr />
          <div className="mt-8 sm:mt-12">
            <form onSubmit={submitLoginForm}>
              <div className="email mb-4">
                <InputField label_heading="Email" id="email" name="email" className="w-full" placeholder="Enter your email" div_name="email" value={formData.email} onChange={handleInputChange} error={errors.email} />
              </div>
              <div className="password mb-4">
                <PasswordField label_heading="Password" id="password" name="password" className="w-full" placeholder="Enter your password" div_name="password" value={formData.password} onChange={handleInputChange} error={errors.password} />
              </div>
              <div>
                <SubmitButton name="login" id="login" className="w-full" div_name="submit" label="Login" disabled={disabled} onClick={handleClick}/>
              </div>
            </form>
            <div>
              <p className="text-center pb-5 pt-8 underline"><NavLink to={USERS_FORGOT_PASSWORD}>Forgot Password?</NavLink></p>
              <p className="text-center pb-5 pt-2"><span>Don&apos;t have an account? </span><NavLink to={USERS_SIGNUP} className="underline ml-1">Sign up for MelodyHub</NavLink></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
