"use client";
import AuthInput from "../authinput";
import AuthLabel from "../authlabel";

import Logo from "@/app/assets/images/craftbilling-logo.png";
import Image from "next/image";

import { useRouter } from "next/navigation";

const SignUp = () => {

    const router = useRouter();

    return (
        <div className="bg-primary w-[500px] p-5 h-fit rounded-xl ml-auto mr-auto mt-[100px] mt-auto mb-auto">
            <Image src={Logo} alt="logo" className="w-[128px] ml-auto mr-auto"/>
            <p className="text-center text-white text-[25px] font-bold">Create an account</p>
            <form className="grid justify-center text-white mt-[15px]">
                <AuthLabel htmlFor="fullname" label="Full Name" />
                <AuthInput type="text" required={true}/>
                <AuthLabel htmlFor="email" label="Email Address"/>
                <AuthInput type="email" required={true}/>
                <AuthLabel htmlFor="streetaddress" label="Street Address"/>
                <AuthInput type="text" required={true}/>
                <div className="flex justify-between">
                    <div className="grid">
                        <AuthLabel htmlFor="city" label="City" />
                        <AuthInput type="text" className="w-[125px]" required={true}/>
                    </div>
                    <div className="grid">
                        <AuthLabel htmlFor="state" label="State" />
                        <AuthInput type="text" className="w-[125px]" required={true}/>
                    </div>
                    <div className="grid">
                        <AuthLabel htmlFor="postcode" label="Postcode" />
                        <AuthInput type="text" className="w-[125px]" required={true}/>
                    </div>
                </div>
                <AuthLabel htmlFor="country" label="Country" />
                <AuthInput type="text" required={true}/>
                <AuthLabel htmlFor="password" label="Password" />
                <AuthInput type="password" required={true}/>
                <AuthInput type="submit" value="Sign In" className="mt-[15px] hover:opacity-90 hover:cursor-pointer font-bold"/>
                <div className="flex justify-between">
                    <div className="flex space-x-[10px] mt-[10px] mb-[10px]">
                        <input type="checkbox" className="accent-secondary w-[16px] h-[16px] rounded-lg mt-[2px]"/>
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