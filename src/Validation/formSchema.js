import * as yup from 'yup';

const schema = yup.object().shape({
    first: yup
        .string()
        .min(2, "First name must be at least 2 characters")
        .trim()
        .required("First name must be at least 2 characters"),
    last: yup
        .string()
        .min(2, "Last name must be at least 2 characters")
        .trim()
        .required("Last name must be at least 2 characters"),
    username: yup
        .string()
        .min(3, "Username must be at least 3 characters")
        .max(20, "Username may not be longer than 20 characters")
        .trim()
        .required("Please insert Username"),
    email: yup
        .string()
        .trim()
        .required("You must enter an email address"),
    password: yup
        .string()
        .min(8, "Password must be at least 8 characters")
        .max(20, "Username may not be longer than 20 characters")
        .trim()
        .required("Please insert password"),
})

export default schema;