interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
    id: string;
    firstLastName: string;
    label: string;
    placeholder: string;
    type?: string;
    error?: boolean;
    errorMessage?: string;
}

const TextArea = ({
    id,
    firstLastName,
    label,
    placeholder,
    error,
    errorMessage,
    ...props
}: TextAreaProps) => {
    
}