export const ValidateForm = (values) => {
    let error = {};

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!values.firstName.trim()) {
        error.firstName = "user first name required";
    }
    if (!values.lastName.trim()) {
        error.lastName = "Last name required";
    }
    if(!values.email) {
        error.email = "Email is required";
    }
    else if (!values.email.match(validRegex)) {
        error.email = "Please enter a valid email";
    }

    if(!values.password) {
        error.password = "Password is required!";
    } 
    else if (values.password.length < 8) {
        error.password = "Minimum length for password is 8";
    }
    if(!values.confirmPassword) {
        error.confirmPassword = "Confirming password is required";
    }
    else if(values.password !== values.confirmPassword) {
        error.confirmPassword = "Password doesn't match";
    }

    return error;
}