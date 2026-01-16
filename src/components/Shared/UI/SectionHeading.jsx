import React from "react";

const SectionHeading = ({ title, subtitle, align = "center" }) => {
    const alignMap = {
        left: "text-left",
        center: "text-center mx-auto",
    };

    return (
        <div className={`mb-8 md:mb-10 max-w-2xl ${alignMap[align]}`}>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                <span className="text-primary">{title}</span>
            </h2>
            {subtitle ? (
                <p className="mt-2 text-base md:text-lg text-base-content/70">
                    {subtitle}
                </p>
            ) : null}
        </div>
    );
};

export default SectionHeading;
