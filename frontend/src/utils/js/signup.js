export const validate_signup_submit_form = (data) => {
    const errors = {};

    if (!data.name.trim()) {
        errors.name = 'Name is required';
    } else if (!/^[a-zA-Z]+$/.test(data.name)){
        errors.name = 'Name should contain only letters';
    }
    
    if (!data.email.trim()) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = 'Invalid email format.';
    }

    // if (!data.username.trim()) {
    //     errors.username = 'Username is required';
    // } else if (!/^(?=.*[a-zA-Z])[a-zA-Z0-9]+$/.test(data.username)){
    //     errors.username = 'Username must contain letters and numbers only';
    // }

    // const currentDate = new Date();
    // const inputDate = new Date(data.date_of_birth);

    // if (!data.date_of_birth.trim()) {
    //     errors.date_of_birth = 'Date of birth is required.';
    // } else if (!/^\d{4}-\d{2}-\d{2}$/.test(data.date_of_birth)) {
    //     errors.date_of_birth = 'Invalid date format.';
    // } else if (inputDate > currentDate) {
    //     errors.date_of_birth = 'Date of birth cannot be greater than today.';
    // }

    if (!data.mobile_number.trim()) {
        errors.mobile_number = 'Mobile number is required';
    } else if (!/^\d{10,12}$/.test(data.mobile_number)){
        errors.mobile_number = 'Mobile number must contain 10 to 12 numbers only.';
    }

    // if (!data.gender.trim()) {
    //     errors.gender = 'Gender is required';        
    // }

    // if (!data.hobbies) {
    //     errors.hobbies = 'Hobby field is required.';  
    // } else if (data.hobbies === '') {
    //     errors.hobbies = 'Please select atleast 1 hobby.';
    // }

    if (!data.password.trim()) {
        errors.password = 'Password is required';
    // } else if(!/^(?=.*\d)(?=.*[a-z]|[A-Z]).{6,20}$/.test(data.password)) {
    //     errors.password = 'Invalid password format. Must contain at least 6 characters, 1 capital letter and 1 number.';
    }

    if (!data.confirm_password.trim()) {
        errors.confirm_password = 'Confirm password is required';
    } else if (data.confirm_password !== data.password) {
        errors.confirm_password = 'Confirm password does not match.';
    }

    return errors;
};
