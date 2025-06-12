import React from 'react';
import {Link} from "react-router-dom";

const BackendProjects = () => {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen w-full text-center space-y-2">
            <h2 className="text-3xl font-bold text-white">
                Frontend Projects Coming Soon
            </h2>

            <p className="text-gray-400">
                I have almost finished coding this part of the webpage to add my frontend projects.
            </p>
            <p className="text-gray-400">
                Here is the github link to the code for this webpage! https://github.com/aryamanram/Portfolio-Website
            </p>
            <Link
                to="/"
                className="mt-6 inline-block rounded-full bg-white px-6 py-2 text-base font-semibold text-black transition hover:scale-105 focus-visible:outline-none focus-visible:ring focus-visible:ring-white/50"
            >
                Take me home
            </Link>
        </section>
    );
};

export default BackendProjects;
