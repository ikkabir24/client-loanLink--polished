import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoanCard from "./LoanCard";
import SectionWrap from "../../components/Shared/UI/SectionWrap";
import SectionHeading from "../../components/Shared/UI/SectionHeading";
import { GrNext, GrPrevious } from "react-icons/gr";

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

    const [loanCount, setLoanCount] = useState(0);
    const [sort, setSort] = useState("interestRate");
    const [order, setOrder] = useState("asc");
    const [searchText, setSearchText] = useState("");
    const [category, setCategory] = useState("");
    const [totalPage, setTotalPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    const limit = 8;

    const { data: loans, isLoading } = useQuery({
        queryKey: ["explore-loans", currentPage, sort, order, searchText, category],
        queryFn: async () => {
            const result = await axios(`${import.meta.env.VITE_API_URL}/explore-loans?sort=${sort}&order=${order}&search=${searchText}&category=${category}&limit=${limit}&skip=${currentPage * limit}`);

            const totalLoans = result.data.total;
            const needPages = Math.ceil(totalLoans / limit);

            setLoanCount(totalLoans);
            setTotalPage(needPages);

            return result.data.loans;
        },
    });


    const handleSelect = (e) => {
        const sortData = e.target.value;
        setSort(sortData.split("-")[0]);
        setOrder(sortData.split("-")[1]);

    }

    const handleSearch = (e) => {
        setSearchText(e.target.value);
    };

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

            <div className="mb-6 flex items-center gap-3 flex-col md:flex-row md:justify-between md:items-center">

                {/* Found Loans */}
                <h3 className='text-lg font-semibold p-3 text-center md:text-left flex-1'>Total: {isLoading ? "…" : loanCount}</h3>

                {/* Search */}
                <form className="mx-auto text-center flex-1"
                    onChange={handleSearch}
                >
                    <label className="input max-w-[300px] w-[300px] input-primary">
                        <svg
                            className="h-[1em] opacity-50"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >

                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" className="" placeholder="Search Apps" />
                    </label>
                </form>

                {/* category filter, order & Sort */}

                <div className="flex flex-col items-center gap-2 flex-1">

                    <select
                        onChange={(e) => setCategory(e.target.value)}
                        defaultValue=""
                        className="select border border-primary w-[200px] text-sm truncate mx-auto md:mr-0"
                    >
                        <option disabled={true}>
                            Select Category
                        </option>
                        <option value="">All</option>
                        <option>Business</option>
                        <option>Education</option>
                        <option>Medical</option>
                        <option>Personal</option>
                        <option>Others</option>
                    </select>

                    <select
                        onChange={handleSelect}
                        defaultValue="interestRate-asc"
                        className="select border border-primary w-[200px] text-sm truncate mx-auto md:mr-0"
                    >
                        <option disabled={true}>
                            Sort by
                        </option>
                        <option value={"interestRate-desc"}>Interest Rate : High - Low</option>
                        <option value={"interestRate-asc"}>Interest Rate : Low - High</option>
                        <option value={"emiPlans-desc"}>EMI Plans : High - Low</option>
                        <option value={"emiPlans-asc"}>EMI Plans : Low - High</option>
                        <option value={"maxLimit-desc"}>Max Limit : High - Low</option>
                        <option value={"maxLimit-asc"}>Max Limit : Low - High</option>
                    </select>

                </div>

            </div>

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

            <div className="flex justify-center flex-wrap gap-3 pt-4">
                {
                    currentPage > 0 && (
                        <button
                            className='btn btn-primary'
                            onClick={() => setCurrentPage(currentPage - 1)}
                        >
                            <GrPrevious />
                        </button>
                    )
                }
                {
                    [...Array(totalPage).keys()].map(i => (
                        <button
                            onClick={() => setCurrentPage(i)}
                            className={`btn ${i === currentPage && 'btn-primary'}`}
                            key={i}
                        >
                            {i + 1}
                        </button>
                    ))
                }
                {
                    currentPage < totalPage - 1 && (
                        <button
                            className='btn btn-primary'
                            onClick={() => setCurrentPage(currentPage + 1)}
                        >
                            <GrNext />
                        </button>
                    )
                }
            </div>

        </SectionWrap>
    );
};

export default AllLoans;
