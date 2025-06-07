import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import bg from "/images/PageNotFoundImages/PageNotFoundBackground.svg";

const NotFoundPage = () => (
    <div
        className={clsx(
            "w-screen h-dvh",           // full viewport
            "bg-cover bg-center bg-no-repeat",
            "relative isolate"          // allow stacking contexts
        )}
        style={{ backgroundImage: `url(${bg})` }}
    >
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-2xl bg-black/60 backdrop-blur-md px-10 py-8 text-center select-none">
                <h1 className="text-6xl font-extrabold tracking-tight text-white">404</h1>
                <p className="mt-4 text-lg text-white/80">Sorry, that page doesn’t exist.</p>

                <Link
                    to="/"
                    className="mt-6 inline-block rounded-full bg-white px-6 py-2 text-base font-semibold text-black transition hover:scale-105 focus-visible:outline-none focus-visible:ring focus-visible:ring-white/50"
                >
                    Take me home
                </Link>
            </div>
        </div>
    </div>
);

export default NotFoundPage;
