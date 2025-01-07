import { useState } from "react";
import { InputField, PasswordField, SubmitButton, validate_login_submit_form, axios, BACKEND_LOGIN, toast, NavLink, USERS_SIGNUP, useNavigate, USERS_HOMEPAGE, ADMIN_HOMEPAGE, BACKEND_ERROR, USERS_FORGOT_PASSWORD } from "../routes/routes.jsx";

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [disabled, setDisabled] = useState(false);

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
        toast.success("Login successfully.")
        response.data.roleName == "User" ? navigate(USERS_HOMEPAGE) : navigate(ADMIN_HOMEPAGE);
      }
      catch (err) {
        setDisabled(false);
        toast.error("Invalid credential.");
        const errorData = {
          error: err.message,
          message: "Login Error : Invalid credential. " . error,
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
      <div className="min-h-screen min-w-full flex flex-col items-center justify-center text-white bg-gradient-to-b from-gray-950 to-gray-900 md:py-10">
        <div className="w-full max-w-3xl p-6 sm:px-52 sm:py-32 border-2 border-gray-400 rounded-2xl bg-black/35 shadow-xl shadow-gray-600 overflow-y-auto">
          <div className="mb-8 sm:mb-12">
            <div className="text-4xl sm:text-4xl font-medium mb-8 text-center">
              <h1>Login to MelodyHub</h1>
            </div>
            <div>
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
