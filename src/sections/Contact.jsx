import React from 'react';
import TitleHeader from "../components/TitleHeader.jsx";

const Contact = ({
                     linkedInUrl = "https://www.linkedin.com/in/aryaman-ramchandran",
                     githubUrl   = "https://github.com/aryamanram",
                     email       = "aryamanramchandran@gmail.com",
                 }) => {
    return (
        <div id="contact" className="flex flex-col items-center mt-20 py-10">
            <TitleHeader title="Contact" />

            {/* Links */}
            <div className="flex items-center gap-8 mt-4">
                {/* LinkedIn */}
                <a
                    href={linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:underline"
                >
                    <img
                        src="/images/ContactImages/LinkedInLogo.svg"
                        alt="LinkedIn logo"
                        className="w-6 h-6"
                    />
                    <span>LinkedIn</span>
                </a>

                {/* GitHub */}
                <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:underline"
                >
                    <img
                        src="/images/ContactImages/GitHubLogo.svg"
                        alt="GitHub logo"
                        className="w-6 h-6"
                    />
                    <span>GitHub</span>
                </a>

                {/* Email */}
                <a
                    href={`mailto:${email}`}
                    className="flex items-center gap-2 hover:underline"
                >
                    <span>Email</span>
                </a>
            </div>
        </div>
    );
};

export default Contact;
