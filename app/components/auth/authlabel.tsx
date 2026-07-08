import { FC } from "react";

interface AuthLabelProps {
    htmlFor: string;
    label: string;
    className?: string;
}

const AuthLabel: FC<AuthLabelProps> = (props) => {
    const { htmlFor, label, className } = props;

    return <label className={"text-[14px] font-bold mt-[10px] " + (className ?? '')} htmlFor={htmlFor}>{label}</label>
}

export default AuthLabel;