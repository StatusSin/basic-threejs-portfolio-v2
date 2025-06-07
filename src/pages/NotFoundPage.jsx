import React from "react";

const NotFoundPage = () => (
    <div
        /* full-screen background */
        className="w-screen h-dvh bg-cover bg-center bg-no-repeat relative"
        style={{
            backgroundImage:
                "url('/images/PageNotFoundImages/PageNotFoundBackground.svg')",
        }}
    >
        {/* centred content goes here */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
            {/* Example content – swap out or extend as needed */}
            <h1 className="text-5xl font-bold">404</h1>
            <p className="mt-4 text-lg text-white-50">Page not found</p>
        </div>
    </div>
);

export default NotFoundPage;
