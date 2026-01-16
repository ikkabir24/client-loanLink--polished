import React from "react";
import { Link, useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full min-h-[80vh] bg-base-100">
      {/* Global spacing rule */}
      <div className="container mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="flex min-h-[65vh] items-center justify-center">
          <div className="w-full max-w-2xl">
            {/* Card */}
            <div className="card bg-base-100 border border-base-300 shadow-sm">
              <div className="card-body p-6 md:p-10">
                {/* Top icon */}
                <div className="flex justify-center">
                  <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="h-7 w-7 text-primary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Headline */}
                <div className="mt-5 text-center">
                  <p className="text-sm font-semibold text-primary">
                    404 • Page Not Found
                  </p>

                  <h1 className="mt-2 text-2xl md:text-4xl font-extrabold tracking-tight">
                    We couldn’t find the page you’re looking for.
                  </h1>

                  <p className="mt-3 text-base md:text-lg text-base-content/70">
                    The link may be broken, or the page may have been moved. Try
                    one of the options below.
                  </p>
                </div>

                {/* Actions */}
                <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <button
                    onClick={() => navigate(-1)}
                    className="btn btn-ghost border border-base-300"
                  >
                    ← Go Back
                  </button>

                  <button
                    onClick={() => navigate("/")}
                    className="btn btn-primary"
                  >
                    Take Me Home
                  </button>
                </div>

                {/* Small helper text */}
                <p className="mt-6 text-center text-sm text-base-content/60">
                  If you believe this is a mistake, please contact support.
                </p>
              </div>
            </div>

            {/* Subtle footer note */}
            <p className="mt-6 text-center text-xs text-base-content/50">
              LoanLink • Microloan Request & Approval Tracker System
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
