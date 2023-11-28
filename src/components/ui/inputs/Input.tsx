interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    firstLastName: string;
    label: string;
    placeholder: string;
    error?: boolean;
    errorMessage?: string;
}