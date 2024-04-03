"use client";
import React, {useState} from "react";
import {LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

export default function EmailInput() {
    const [email, setEmail] = useState("");

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    return (
        <div className="w-full">
            <div className="flex">
                <input
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={handleEmailChange}
                    className="py-2.5 px-3.5 rounded-lg w-3/4"
                />
                <LoginLink
                    authUrlParams={{
                        connection_id:
                            process.env.NEXT_PUBLIC_KINDE_CONNECTION_EMAIL_PASSWORD || "",
                        login_hint: email
                    }}
                >
                    <button type="button" className="ml-5 py-2.5 px-3.5 bg-olive text-white font-bold rounded-lg ">
                        Submit
                    </button>
                </LoginLink>
            </div>
        </div>
    );
}