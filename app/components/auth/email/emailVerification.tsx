import { MdEmail } from "react-icons/md";

const EmailVerification = () => {
    return (
        <div className="bg-primary w-full max-w-[500px] h-fit p-5 rounded-xl ml-auto mr-auto mt-[150px] mx-4 sm:mx-auto mt-auto mb-auto">
            <MdEmail color="white" size={32} className="ml-auto mr-auto"/>
            <p className="text-center text-white text-[14px] mt-[10px]">Check your mail inbox for confirmation link.</p>
        </div>
    )
}

export default EmailVerification;