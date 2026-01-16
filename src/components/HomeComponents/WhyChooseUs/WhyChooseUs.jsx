import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, TrendingUp, Wallet } from "lucide-react";

import SectionWrap from "../../Shared/UI/SectionWrap";
import SectionHeading from "../../Shared/UI/SectionHeading";

const WhyChooseUs = () => {
  const benefits = [
    {
      id: 1,
      icon: ShieldCheck,
      title: "Secure & Trusted",
      description:
        "Your personal and loan information is protected with industry-standard security practices.",
    },
    {
      id: 2,
      icon: Clock,
      title: "Fast Approval",
      description:
        "Applications are reviewed quickly using a clear and efficient verification workflow.",
    },
    {
      id: 3,
      icon: TrendingUp,
      title: "Flexible EMI Plans",
      description:
        "Choose repayment schedules that align with your income and financial comfort.",
    },
    {
      id: 4,
      icon: Wallet,
      title: "Low Interest Rates",
      description:
        "Competitive interest structures designed to support responsible borrowing.",
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
    <SectionWrap variant="default">
      <SectionHeading
        title="Why Choose LoanLink?"
        subtitle="Designed to make microloan management secure, transparent, and easy for everyone."
      />

      <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;

          return (
            <motion.div
              key={benefit.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -2 }}
              className="h-full"
            >
              {/* Card */}
              <div className="h-full rounded-2xl border border-base-300 bg-base-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-5 md:p-6 flex flex-col">
                  {/* Icon */}
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  {/* Accent line */}
                  <div className="mt-4 h-1 w-12 rounded-full bg-primary/70" />

                  {/* Content */}
                  <h3 className="mt-4 text-lg font-extrabold leading-snug line-clamp-1">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 text-sm text-base-content/70 line-clamp-3">
                    {benefit.description}
                  </p>

                  {/* Spacer to keep equal height */}
                  <div className="flex-1" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrap>
  );
};

export default WhyChooseUs;
