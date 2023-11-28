import { error } from "console";

export const validate = ({ firstLastName,
email, message }: {
    firstLastName: string; email: string; message: string;
}) => {
    const errors: { firstLastName?: string; email?: string; message?: string } = {};
    if (!firstLastName || firstLastName.trim() === "") {
        errors.firstLastName = "Name is required";
    }
    if (!email || email.trim() === "") {
        errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        errors.email = "invalid email address";
    }
    if (!message || message.trim() ==="") {
        errors.message = "Message is required";
    }
    return errors;
}