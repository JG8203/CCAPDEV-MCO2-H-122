import React, { useState } from 'react';
import Navbar from './NavBar';
import ImageCard from "./ImageCard.jsx";
export default LandingPage;

function LandingPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
        // Perform logout actions (e.g., clear session, redirect to login page, etc.)
        setIsLoggedIn(false);
    };

    return (
        <div className="bg-beige font-roboto m-0 p-0 h-screen flex flex-col">
            <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout}/>
            <div className="flex justify-center items-center h-screen flex-col">
                <div className="text flex w-full max-w-md flex-col justify-center items-center">
                    <p className="text-olive text-center text-6xl font-black">DLSU PUSA FORUMS</p>
                </div>
                <div className="flex justify-center items-center mt-5 gap-4">
                    <ImageCard src="/images/mimiw1.png"/>
                    <ImageCard src="/images/mimiw2.png"/>
                    <ImageCard src="/images/mimiw3.png"/>
                    <ImageCard src="/images/mimiw4.png"/>
                </div>
            </div>
        </div>
    );
}