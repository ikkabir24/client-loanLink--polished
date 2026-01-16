import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoanCard from "./LoanCard";
import SectionWrap from "../../components/Shared/UI/SectionWrap";
import SectionHeading from "../../components/Shared/UI/SectionHeading";

const LoanCardSkeleton = () => {
    return (
        <div className="rounded-2xl border border-base-300 bg-base-100 shadow-sm overflow-hidden h-full">
            {/* Image */}
            <div className="skeleton w-full aspect-[16/10]" />

            {/* Body */}
            <div className="p-5 md:p-6 space-y-3">
                <div className="skeleton h-5 w-3/4" />
                <div className="skeleton h-4 w-full" />

                <div className="flex flex-wrap gap-2 pt-2">
                    <div className="skeleton h-6 w-24 rounded-full" />
                    <div className="skeleton h-6 w-28 rounded-full" />
                    <div className="skeleton h-6 w-20 rounded-full" />
                </div>

                <div className="pt-3">
                    <div className="skeleton h-10 w-full rounded-xl" />
                </div>
            </div>
        </div>
    );
};

const AllLoans = () => {
    const { data: loans = [], isLoading } = useQuery({
        queryKey: ["all-loans"],
        queryFn: async () => {
            const result = await axios(`${import.meta.env.VITE_API_URL}/all-loans`);
            return result.data;
        },
    });

    return (
        <SectionWrap
            className={'pt-3 md:pt-6'}
        >
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 md:gap-4">
                <SectionHeading
                    title={
                        <>
                            All <span className="text-primary">Loans</span>
                        </>
                    }
                    subtitle="Browse loan options and view details before applying."
                />
            </div>
            <h3 className='text-lg font-semibold p-3'>Total: {isLoading ? "…" : loans.length}</h3>

            {/* Grid: 4 per row on desktop (xl) */}
            <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
                {isLoading
                    ? Array.from({ length: 8 }).map((_, idx) => (
                        <LoanCardSkeleton key={idx} />
                    ))
                    : loans.map((loan) => (
                        <div key={loan._id} className="h-full">
                            <LoanCard loan={loan} />
                        </div>
                    ))}
            </div>
        </SectionWrap>
    );
};

export default AllLoans;
