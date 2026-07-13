import { ChangeEventHandler, FC } from "react";

interface AuthInputProps {
    id?: string;
    type: string;
    placeholder?: string;
    required?: boolean;
    className?: string;
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    autoComplete?: string;
}

const AuthInput: FC<AuthInputProps> = (props) => {
    const {id, type, placeholder, className, required, value, onChange, autoComplete } = props;
    const width = className?.includes('w-') ? '' : 'w-full max-w-[500px] max-h-[35px]';

    return <input id={id} name={id} type={type} autoComplete={autoComplete} placeholder={placeholder} className={`${className ?? ''} text-[14px] ${width} h-[50px] rounded outline-none bg-secondary text-black p-[5px]`} required={required} value={value}
        onChange={onChange}/>
}

export default AuthInput;