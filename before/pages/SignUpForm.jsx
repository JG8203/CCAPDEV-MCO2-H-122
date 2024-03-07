import React from 'react';
export default SignUpForm;

function SignUpForm() {
    return (
        <div className="w-6/12">
            <div className="flex flex-col bg-burnt-sienna rounded-lg p-6 gap-4">
                <input id="usernameInput" type="text" placeholder="Username..."
                       className="py-2.5 px-3.5 rounded-lg"/>
                <input id="emailInput" type="email" placeholder="Email..."
                       className="py-2.5 px-3.5 rounded-lg"/>
                <input id="confirmEmailInput" type="email" placeholder="Confirm Email..."
                       className="py-2.5 px-3.5 rounded-lg"/>
                <input type="password" placeholder="Password..."
                       className="py-2.5 px-3.5 rounded-lg"/>
                <div className="flex justify-between items-center">
                    <button id="signUpButton"
                            className="py-2.5 px-3.5 bg-olive text-white font-bold rounded-lg">Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
}

