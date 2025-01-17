import { useState } from "react";
import { InputField, PasswordField, SubmitButton, validate_signup_submit_form, axios, BACKEND_SIGNUP, toast, NavLink, USERS_LOGIN, useNavigate, USERS_HOMEPAGE, ADMIN_HOMEPAGE, BACKEND_ERROR, LOGO_URL } from "../routes/routes.jsx";

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', mobile_number: '', password: '', confirm_password: '' });
  const [errors, setErrors] = useState({});
  const [disabled, setDisabled] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const validation_errors = validate_signup_submit_form({ ...formData, [name]: value });
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    setErrors(prevErrors => ({ ...prevErrors, [name]: validation_errors[name] || null }));
  };

  const handleClick = () => setDisabled(true);
  const navigate = useNavigate();

  const submitLoginForm = async (e) => {
    e.preventDefault();
    const validation_errors = validate_signup_submit_form(formData);
    if (Object.keys(validation_errors).length === 0) {
      try {
        setDisabled(true);
        const response = await axios.post(BACKEND_SIGNUP, formData);
        setDisabled(false);
        toast.success("New account created successfully.");
        response.data.roleName == "User" ? navigate(USERS_HOMEPAGE) : navigate(ADMIN_HOMEPAGE);
      }
      catch (err) {
        setDisabled(false);
        toast.error("Something went wrong. Please try again after somtime.");
        const errorData = {
          error: err.message,
          message: `Signup Error : Something went wrong. Please try again after somtime. ${err.message}`,
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
        <div className="w-full max-w-lg overflow-y-auto">
          <div className="mb-8 sm:mb-12">
            <NavLink to={USERS_HOMEPAGE} className="flex items-center justify-center space-x-3 rtl:space-x-reverse">
              <img src={LOGO_URL} className="h-32 rounded-full w-32 mb-4" alt="Flowbite Logo" />
            </NavLink>
            <div className="text-5xl sm:text-5xl font-medium mb-8 text-center">
              <h1>Sign up to start listening</h1>
            </div>
          </div>
          <hr />
          <div className="mt-8 sm:mt-12">
            <form onSubmit={submitLoginForm}>
              <div className="sm:flex gap-6">
                <div className="name mb-4">
                  <InputField label_heading="Name" id="name" name="name" className="w-full" placeholder="Enter your full name" div_name="name" value={formData.name} onChange={handleInputChange} error={errors.name} />
                </div>
                <div className="email mb-4">
                  <InputField label_heading="Email" id="email" name="email" className="w-full" placeholder="Enter your email" div_name="email" value={formData.email} onChange={handleInputChange} error={errors.email} />
                </div>
              </div>
              <div className="sm:flex gap-6">
                <div className="mobile_number mb-4">
                  <InputField label_heading="Mobile Number" id="mobile_number" name="mobile_number" className="w-full" placeholder="Enter your mobile number" div_name="mobile_number" value={formData.mobile_number} onChange={handleInputChange} error={errors.mobile_number} />
                </div>
              </div>
              <div className="sm:flex gap-6">
                <div className="password mb-4">
                  <PasswordField label_heading="Password" id="password" name="password" className="w-full" placeholder="Enter your password" div_name="password" value={formData.password} onChange={handleInputChange} error={errors.password} />
                </div>
                <div className="confirm_password mb-4">
                  <PasswordField label_heading="Confirm Password" id="confirm_password" name="confirm_password" className="w-full" placeholder="Enter your confirm password" div_name="confirm_password" value={formData.confirm_password} onChange={handleInputChange} error={errors.confirm_password} />
                </div>
              </div>
              <div>
                <SubmitButton name="signup" id="signup" className="w-full" div_name="submit" label="Signup" disabled={disabled} onClick={handleClick} />
              </div>
            </form>
            <div>
              <p className="text-center py-6"><span>Already have an account. </span><NavLink to={USERS_LOGIN} className="underline ml-1">Login here.</NavLink></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
