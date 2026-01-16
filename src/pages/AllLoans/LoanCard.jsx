import React from "react";
import { Link } from "react-router";

const LoanCard = ({ loan }) => {
    return (
        <div className="card bg-base-100 border border-base-300 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 h-full">

            {/* Image */}
            <figure className="relative aspect-[16/10] overflow-hidden rounded-t-2xl">
                <img
                    src={loan.imageURL}
                    referrerPolicy="no-referrer"
                    alt={loan.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                />

                {/* Category badge */}
                <div className="absolute left-3 top-3">
                    <span className="px-3 py-1 text-sm rounded-full bg-primary text-white font-medium">
                        {loan.category}
                    </span>
                </div>
            </figure>

            {/* Body */}
            <div className="card-body p-5 md:p-6 gap-4">

                {/* Title + Description (1 line clamp enforced) */}
                <div className="space-y-2">
                    <h3 className="text-lg md:text-xl font-extrabold leading-snug line-clamp-1">
                        {loan.title}
                    </h3>

                    <p className="text-sm text-base-content/70 line-clamp-1">
                        {loan.description}
                    </p>
                </div>

                {/* Meta info */}
                <div className="flex flex-wrap items-center gap-2">
                    <span className="badge badge-ghost border border-base-300">
                        {loan.interestRate}% Interest
                    </span>

                    <span className="badge badge-ghost border border-base-300">
                        Max ${Number(loan.maxLimit).toLocaleString()}
                    </span>

                    {/* EMI plans (number-based, not array) */}
                    {loan.emiPlans ? (
                        <span className="badge badge-ghost border border-base-300">
                            {loan.emiPlans} EMI Plans
                        </span>
                    ) : null}
                </div>

                {/* Spacer → keeps button aligned in grid */}
                <div className="flex-1" />

                {/* Action */}
                <div className="card-actions">
                    <Link to={`/loan/${loan._id}`} className="btn btn-primary w-full">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LoanCard;
