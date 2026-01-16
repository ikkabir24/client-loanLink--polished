import React from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router";

import LoanCard from "../../../pages/AllLoans/LoanCard";
import SectionWrap from "../../Shared/UI/SectionWrap";
import SectionHeading from "../../Shared/UI/SectionHeading";

// Simple skeleton that matches your card layout (no custom colors)
const LoanCardSkeleton = () => {
  return (
    <div className="card bg-base-100 border border-base-300 rounded-2xl shadow-sm h-full overflow-hidden">
      <div className="aspect-[16/10] w-full bg-base-200 animate-pulse" />
      <div className="p-5 md:p-6 space-y-4">
        <div className="h-5 w-3/4 bg-base-200 animate-pulse rounded" />
        <div className="h-4 w-full bg-base-200 animate-pulse rounded" />

        <div className="flex flex-wrap gap-2">
          <div className="h-6 w-28 bg-base-200 animate-pulse rounded" />
          <div className="h-6 w-28 bg-base-200 animate-pulse rounded" />
          <div className="h-6 w-24 bg-base-200 animate-pulse rounded" />
        </div>

        <div className="h-10 w-full bg-base-200 animate-pulse rounded-xl" />
      </div>
    </div>
  );
};

const AvailableLoans = () => {
  const { data: loans = [], isLoading, isError } = useQuery({
    queryKey: ["loans-to-display"],
    queryFn: async () => {
      const result = await axios(
        `${import.meta.env.VITE_API_URL}/loan-cards-display`
      );
      return result.data;
    },
  });

  // Card entrance animation (subtle)
  const cardVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.06,
        duration: 0.35,
        ease: "easeOut",
      },
    }),
  };

  return (
    <SectionWrap className="bg-base-100 pt-12 md:pt-16" variant="default">
      {/* Heading + CTA row */}
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <SectionHeading
            title="Available Loan Options"
            subtitle="Browse featured loans selected for the home page."
          />
        </div>

        {/* Error state (no dummy text, clean) */}
        {isError ? (
          <div className="alert alert-error">
            <span>Failed to load loans. Please try again.</span>
          </div>
        ) : null}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {/* Loading skeletons */}
          {isLoading
            ? Array.from({ length: 8 }).map((_, idx) => (
                <LoanCardSkeleton key={idx} />
              ))
            : loans?.map((loan, index) => (
                <motion.div
                  key={loan._id}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="h-full"
                >
                  <LoanCard loan={loan} />
                </motion.div>
              ))}
        </div>

        {/* Empty state */}
        {!isLoading && !isError && loans?.length === 0 ? (
          <div className="mt-4 text-center">
            <p className="text-base-content/70">
              No loans are available right now.
            </p>
          </div>
        ) : null}
      </div>
    </SectionWrap>
  );
};

export default AvailableLoans;