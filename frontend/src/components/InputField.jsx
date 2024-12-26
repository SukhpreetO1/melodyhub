import { InputFieldPropTypes } from "../routes/routes.jsx";

const InputField = ({ label_heading, placeholder = "", name, id, className = "", div_name = "", value = "", onChange, error = "" }) => {
    return (
        <div className="container mb-3">
            <div className={`${div_name} sm:col-span-4`}>
                <label htmlFor={className} className="block text-sm font-medium leading-6" >{label_heading} <span className="important_mark text-red-500">*</span> </label>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 mt-2">
                    <input type="text" name={name} id={id} className={`${className} block flex-1 border-0 bg-transparent p-3 placeholder:text-white sm:text-sm sm:leading-6`} placeholder={placeholder} value={value} onChange={onChange} onFocus={onChange} />
                </div>
                <span className={`${error} text-red-500 font-semibold text-xs`} >{error}</span>
            </div>
        </div>
    );
};

InputField.propTypes = InputFieldPropTypes;

export default InputField;
