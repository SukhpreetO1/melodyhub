import { useState } from "react";
import { PasswordChecklist, FontAwesomeIcon, faEye, faEyeSlash, PasswordFieldPropTypes } from "../routes/routes.jsx";

const PasswordField = ({ label_heading, placeholder = "", name, id, className = "", div_name = "", value = "", onChange, error = "" }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <div className="container mb-3">
            <div className={`${div_name} sm:col-span-4`}>
                <label htmlFor={id} className="block text-sm font-medium leading-6 ">
                    {label_heading} <span className="text-red-500">*</span>
                </label>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 mt-2 relative">
                    <input type={showPassword ? "text" : "password"} name={name} id={id} className={`${className} block flex-1 border-0 bg-transparent p-3 placeholder:text-white sm:text-sm sm:leading-6`} placeholder={placeholder} value={value} onChange={onChange}/>
                    <button type="button" className="absolute right-2 top-3 cursor-pointer" onClick={togglePasswordVisibility} aria-label={showPassword ? "Hide password" : "Show password"} >
                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </button>
                </div>

                {className === "password" && value && value.length > 0 && (
                    <PasswordChecklist rules={["lowercase", "capital", "number", "minLength", "maxLength"]} minLength={6} maxLength={20} value={value} messages={{
                            lowercase: "Must contain at least one lowercase letter.",
                            capital: "Must contain at least one uppercase letter.",
                            number: "Must contain at least one number.",
                            minLength: "Must have at least 6 characters.",
                            maxLength: "Must not exceed 20 characters."
                        }}
                        className="checklist_password mt-2"
                    />
                )}
                {error && <span className="text-red-500 font-semibold text-xs">{error}</span>}
            </div>
        </div>
    );
};

PasswordField.propTypes = PasswordFieldPropTypes;

export default PasswordField;