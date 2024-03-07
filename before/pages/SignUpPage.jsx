import NavBar from "./NavBar.jsx";
import LoginForm from "./LoginForm.jsx";
import React from "react";
import './SignUpForm.jsx'
import SignUpForm from "./SignUpForm.jsx";
export default SignUpPage;

function SignUpPage() {
    return (
        <div className="bg-beige font-roboto m-0 p-0 h-screen flex flex-col">
            <NavBar/>
            <div className="flex justify-evenly items-center h-screen px-10">
                <div className="flex-grow">
                    <h1 className="text-8xl text-green font-black text-olive">Welcome To DLSU3PS</h1>
                </div>
                <SignUpForm/>
            </div>


        </div>
    );
}
