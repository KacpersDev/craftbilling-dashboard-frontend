"use client";
import AuthInput from "../authinput";
import AuthLabel from "../authlabel";

import Logo from "@/app/assets/images/craftbilling-logo.png";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const SignIn = () => {
    
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await fetch("http://localhost:8080/api/v1/auth/signin", {
                method: 'POST',
                body: JSON.stringify({
                    email, password, remember
                }),
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            const status = response.status;
            const data = await response.json();

            alert(status);
        } catch (err) {
            console.error(err);
        }
    }
    
    return (
        <div className="bg-primary w-full max-w-[500px] h-fit p-5 rounded-xl ml-auto mr-auto mt-[150px] mx-4 sm:mx-auto">
            <Image src={Logo} alt="logo" className="w-[128px] ml-auto mr-auto"/>
            <p className="text-center text-white text-[25px] font-bold">Welcome Back!</p>
            <form className="flex flex-col text-white mt-[15px]" onSubmit={handleSubmit}>
                <AuthLabel htmlFor="email" label="Email Address"/>
                <AuthInput id="email" type="email" required={true} onChange={(e) => setEmail(e.target.value)} autoComplete="email"/>
                <AuthLabel htmlFor="password" label="Password"/>
                <AuthInput id="password" type="password" required={true} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password"/>
                <AuthInput type="submit" value="Sign In" className="mt-[15px] hover:opacity-90 hover:cursor-pointer font-bold"/>
                <div className="flex justify-between">
                    <div className="flex space-x-[10px] mt-[10px] mb-[10px]">
                        <input type="checkbox" className="accent-secondary w-[16px] h-[16px] rounded-lg mt-[2px]" onChange={(_) => setRemember(!remember)}/>
                        <p className="text-[14px]">Remember Me</p>
                    </div>
                    <div className="mt-[8px]">
                        <p className="hover:cursor-pointer hover:text-secondary text-[14px]">Forgot password?</p>
                    </div>
                </div>
                <p className="text-[14px] mt-[5px]">Don't have an account? <span className="font-bold text-secondary hover:cursor-pointer hover:opacity-90" onClick={() => router.push('/auth/signup')}>Sign Up</span></p>
            </form>
        </div>
    )
}

export default SignIn;