import { FC } from "react";

interface AuthInputProps {
    type: string;
    placeholder?: string;
    required?: boolean;
    className?: string;
    value?: string;
}

const AuthInput: FC<AuthInputProps> = (props) => {
    const {type, placeholder, className, required, value } = props;
    const width = className?.includes('w-') ? '' : 'w-[400px]';

    return <input type={type} placeholder={placeholder} className={(className ?? '') + " text-[14px] " + width + " h-[50px] rounded outline-none bg-secondary text-black p-[5px]"} required={required} value={value}/>
}

export default AuthInput;