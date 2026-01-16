import React from "react";
import { motion } from "framer-motion";
import {
  FaWpforms,
  FaCheckCircle,
  FaMoneyBillWave,
  FaUserShield,
} from "react-icons/fa";

import SectionWrap from "../../Shared/UI/SectionWrap";
import SectionHeading from "../../Shared/UI/SectionHeading";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: FaWpforms,
      title: "Submit Loan Request",
      desc: "Complete a quick application with your details and required documents.",
    },
    {
      id: 2,
      icon: FaUserShield,
      title: "Verification",
      desc: "Our loan officer reviews and verifies your information securely.",
    },
    {
      id: 3,
      icon: FaCheckCircle,
      title: "Decision & Approval",
      desc: "A manager approves or rejects based on eligibility and policy checks.",
    },
    {
      id: 4,
      icon: FaMoneyBillWave,
      title: "Disbursement & Repayment",
      desc: "Once approved, funds are released and EMI repayment begins on schedule.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.35, ease: "easeOut" },
    }),
  };

  return (
    <SectionWrap className="bg-base-100" variant="default">
      {/* Header row */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6">
        <SectionHeading
          title="How It Works"
          subtitle="A simple, transparent flow from application to approval and repayment."
        />
      </div>

      {/* Steps grid */}
      <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={step.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -2 }}
              className="h-full"
            >
              <div className="h-full rounded-2xl border border-base-300 bg-base-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-5 md:p-6">
                  {/* Top row: step badge + icon */}
                  <div className="flex items-start justify-between">
                    <span className="badge badge-primary badge-outline">
                      Step {step.id}
                    </span>

                    <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="text-2xl text-primary" />
                    </div>
                  </div>

                  {/* Accent line */}
                  <div className="mt-4 h-1 w-12 rounded-full bg-primary/70" />

                  {/* Content */}
                  <h3 className="mt-4 text-lg font-extrabold leading-snug line-clamp-1">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm text-base-content/70 line-clamp-3">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrap>
  );
};

export default HowItWorks;
