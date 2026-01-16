import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

import SectionWrap from "../../Shared/UI/SectionWrap";
import SectionHeading from "../../Shared/UI/SectionHeading";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "How do I apply for a loan?",
      a: "Create an account, complete your profile, upload required documents, and select a suitable loan option.",
    },
    {
      q: "How long does approval take?",
      a: "Most applications are reviewed within 24–48 hours, depending on document verification.",
    },
    {
      q: "What documents are required?",
      a: "National ID, Birth Certificate, and TIN Certificate are typically required.",
    },
    {
      q: "Is my personal information secure?",
      a: "Yes. We use strict access control and industry-standard security practices to protect your data.",
    },
    {
      q: "Can I repay early?",
      a: "Yes. Early repayment is allowed. Any applicable conditions are clearly shown in loan details.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <SectionWrap>
      <SectionHeading
        title={
          <>
            Frequently Asked <span className="text-primary">Questions</span>
          </>
        }
        subtitle="Quick answers to common questions about loans, approvals, and repayments."
      />

      <div className="mx-auto max-w-4xl space-y-3 md:space-y-4">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="rounded-2xl border border-base-300 bg-base-100 shadow-sm overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left bg-base-200/60 hover:bg-base-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span className="font-semibold leading-snug">
                  {item.q}
                </span>

                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0 h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center"
                >
                  <ChevronDown className="h-5 w-5 text-primary" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="px-5 md:px-6 pb-5 md:pb-6"
                  >
                    <p className="pt-1 text-sm md:text-base text-base-content/70 leading-relaxed">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </SectionWrap>
  );
};

export default FAQSection;