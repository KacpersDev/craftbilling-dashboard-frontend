"use client";
import AuthInput from "../authinput";
import AuthLabel from "../authlabel";

import Logo from "@/app/assets/images/craftbilling-logo.png";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { useState } from "react";

const SignUp = () => {

    const router = useRouter();

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [postcode, setPostCode] = useState("");
    const [country, setCountry] = useState("");
    const [remember, setRemember] = useState(false);

    return (
        <div className="bg-primary w-full max-w-[500px] p-5 h-fit rounded-xl ml-auto mr-auto mt-auto mb-auto">
            <Image src={Logo} alt="logo" className="w-[128px] ml-auto mr-auto"/>
            <p className="text-center text-white text-[25px] font-bold">Create an account</p>
            <form className="flex flex-col text-white mt-[15px]">
                <AuthLabel htmlFor="fullname" label="Full Name" />
                <AuthInput id="fullname" type="text" required={true} onChange={(e) => setFullName(e.target.value)} autoComplete="name"/>
                <AuthLabel htmlFor="email" label="Email Address"/>
                <AuthInput id="email" type="email" required={true} onChange={(e) => setEmail(e.target.value)} autoComplete="email"/>
                <AuthLabel htmlFor="streetaddress" label="Street Address"/>
                <AuthInput id="streetaddress" type="text" required={true} onChange={(e) => setAddress(e.target.value)} autoComplete="address-line1"/>
                <div className="flex justify-between gap-2">
                    <div className="grid flex-1 min-w-0">
                        <AuthLabel htmlFor="city" label="City" />
                        <AuthInput id="city" type="text" required={true} onChange={(e) => setCity(e.target.value)} autoComplete="address-level2"/>
                    </div>
                    <div className="grid flex-1 min-w-0">
                        <AuthLabel htmlFor="state" label="State" />
                        <AuthInput id="state" type="text" required={true} onChange={(e) => setState(e.target.value)} autoComplete="address-level1"/>
                    </div>
                    <div className="grid flex-1 min-w-0">
                        <AuthLabel htmlFor="postcode" label="Postcode" />
                        <AuthInput id="postcode" type="text" required={true} onChange={(e) => setPostCode(e.target.value)} autoComplete="postal-code"/>
                    </div>
                </div>
                <AuthLabel htmlFor="country" label="Country" />
                <AuthInput id="country" type="text" required={true} onChange={(e) => setCountry(e.target.value)} autoComplete="country-name"/>
                <AuthLabel htmlFor="password" label="Password" />
                <AuthInput id="password" type="password" required={true} onChange={(e) => setPassword(e.target.value)} autoComplete="new-password"/>
                <AuthInput type="submit" value="Sign Up" className="mt-[15px] hover:opacity-90 hover:cursor-pointer font-bold"/>
                <div className="flex justify-between">
                    <div className="flex space-x-[10px] mt-[10px] mb-[10px]">
                        <input type="checkbox" className="accent-secondary w-[16px] h-[16px] rounded-lg mt-[2px]" onChange={(_) => setRemember(!remember)}/>
                        <p className="text-[14px]">Remember Me</p>
                    </div>
                    <div className="mt-[8px]">
                        <p className="hover:cursor-pointer hover:text-secondary text-[14px]">Forgot password?</p>
                    </div>
                </div>
                <p className="text-[14px] mt-[5px]">Already have an account? <span className="font-bold text-secondary hover:cursor-pointer hover:opacity-90" onClick={() => router.push('/auth/signin')}>Sign In</span></p>
            </form>
        </div>
    )
}

export default SignUp;