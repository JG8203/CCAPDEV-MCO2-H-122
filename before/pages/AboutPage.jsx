import React from 'react';
import NavBar from "./NavBar.jsx";
export default AboutPage;

function AboutPage(){
    return (
        <div className="bg-beige font-roboto m-0 p-0 h-screen flex flex-col">
        <NavBar/>
        <div className="flex justify-center items-center h-screen">
            <div className="about-container max-w-6xl mx-auto mt-10 flex flex-col items-center px-4 py-8 bg-olive rounded-3xl shadow-md">
                <p className="about text-5xl text-white font-bold mb-6">ABOUT</p>
                <p className="about-text text-white text-lg font-light text-center">
                    In the heart of Taft Avenue lies De La Salle University, where not only students, faculty, and staff
                    reside but also cats!
                    These cats were originally stray but were adopted by the DLSU-PUSA, an organization that mainly takes
                    care of Manila campus cats and occasionally stray dogs.
                    This forum is dedicated to appreciation for the people who dedicate their time and effort and to the
                    cats who uplift the mood of many people they meet.
                </p>
            </div>
        </div>
        </div>
    );
}