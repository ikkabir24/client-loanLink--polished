import React from "react";
import { Link } from "react-router";

const WebLogo = () => {
    return (
        <Link
            to="/"
            className="text-2xl lg:text-4xl font-extrabold tracking-tight flex items-center"
        >
            <span className="text-black dark:text-white">
                Loan
            </span>
            <span
                className="
          ml-1
          bg-gradient-to-r 
          from-primary 
          via-primary/80 
          to-primary/60
          bg-clip-text 
          text-transparent
        "
            >
                Link
            </span>
        </Link>
    );
};

export default WebLogo;
