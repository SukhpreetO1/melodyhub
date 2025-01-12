import { useState } from "react";
import { InputField, SubmitButton, validate_forgot_password_submit_form, axios, BACKEND_FORGOT_PASSWORD, toast, NavLink, USERS_LOGIN, useNavigate, BACKEND_ERROR, USERS_HOMEPAGE, LOGO_URL } from "../routes/routes.jsx";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({ email: '' });
  const [errors, setErrors] = useState({});
  const [disabled, setDisabled] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const validation_errors = validate_forgot_password_submit_form({ ...formData, [name]: value });
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    setErrors(prevErrors => ({ ...prevErrors, [name]: validation_errors[name] || null }));
  }

  const handleClick = () => setDisabled(true);
  const navigate = useNavigate();

  const submitForgotPasswordForm = async (e) => {
    e.preventDefault();
    const validation_errors = validate_forgot_password_submit_form(formData);    
    if (Object.keys(validation_errors).length === 0) {
      try {
        setDisabled(true);
        const response = await axios.post(BACKEND_FORGOT_PASSWORD, formData);       
        setDisabled(false);
        toast.success(response.data.message)
        navigate(USERS_LOGIN);
      }
      catch (err) {
        setDisabled(false);
        toast.error("Email not found. Please check the email and try again.");
        const errorData = {
          error: err.message,
          message: `Forgot-Password : Email not found. Please check the email and try again. ${err.message}`,
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
              <h1>Reset your password</h1>
            </div>
            <p>Enter the email address linked to your Spotify account and we&apos;ll send you an email.</p>
          </div>
          <div className="mt-8 sm:mt-12">
            <form onSubmit={submitForgotPasswordForm}>
              <div className="email mb-4">
                <InputField label_heading="Email" id="email" name="email" className="w-full" placeholder="Enter your email" div_name="email" value={formData.email} onChange={handleInputChange} error={errors.email} />
              </div>
              <div>
                <SubmitButton name="forgot_password" id="forgot_password" className="w-full" div_name="submit" label="Send Link" disabled={disabled} onClick={handleClick}/>
              </div>
            </form>
            <div>
              <p className="text-center pb-5 pt-4"><NavLink to={USERS_LOGIN} className="underline ml-1">Back to login.</NavLink></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword
