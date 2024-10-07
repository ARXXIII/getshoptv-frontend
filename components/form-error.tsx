type FormErrorMessageProps = {
    message?: string
}

export const FormErrorMessage = ({ message }: FormErrorMessageProps) => {
    return (
        <p className="absolute text-[10px] text-error">{message}</p>
    )
}