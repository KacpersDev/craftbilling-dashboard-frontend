import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const { email, name } = await req.json();

    await resend.emails.send({
        from: 'onboarding@kacperm.dev',
        to: email,
        subject: 'Email Confirmation',
        html: 'This is a test email.'
    })

    return NextResponse.json({message: "sent"});
}