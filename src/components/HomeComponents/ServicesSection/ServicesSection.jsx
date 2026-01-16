import React from "react";
import { motion } from "framer-motion";
import {
    FileText,
    BadgeCheck,
    ShieldCheck,
    CalendarClock,
    CreditCard,
    Headphones,
} from "lucide-react";

import SectionWrap from "../../Shared/UI/SectionWrap";
import SectionHeading from "../../Shared/UI/SectionHeading";

const services = [
    {
        id: 1,
        icon: FileText,
        title: "Quick Loan Application",
        desc: "Apply in minutes with a clean form, required fields, and instant validation feedback.",
        meta: "Paperless flow",
    },
    {
        id: 2,
        icon: BadgeCheck,
        title: "Verification Workflow",
        desc: "Structured verification for documents and identity to maintain trust and accountability.",
        meta: "Manager review",
    },
    {
        id: 3,
        icon: CalendarClock,
        title: "Flexible EMI Planning",
        desc: "Choose an EMI duration that matches your budget and repayment comfort.",
        meta: "Smart schedules",
    },
    {
        id: 4,
        icon: CreditCard,
        title: "Application Fee Payment",
        desc: "Secure fee payment with Stripe and clear transaction details inside your dashboard.",
        meta: "Payment tracked",
    },
    {
        id: 5,
        icon: ShieldCheck,
        title: "Secure Access & Roles",
        desc: "Role-based dashboards for Borrower, Manager, and Admin with protected routes.",
        meta: "JWT + Firebase",
    },
    {
        id: 6,
        icon: Headphones,
        title: "Support & Guidance",
        desc: "Get quick help via support resources and guided instructions for each step.",
        meta: "Helpful UX",
    },
];

const ServicesSection = () => {

    const cardVariants = {
        hidden: { opacity: 0, y: 14 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.06, duration: 0.35, ease: "easeOut" },
        }),
    };

    return (
        <SectionWrap variant="default">
            <SectionHeading
                title={
                    <>
                        Services Built for <span className="text-primary">Microloans</span>
                    </>
                }
                subtitle="Everything you need—from applying to approval, EMI planning, and payment tracking."
            />

            <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                {services.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <motion.div
                            key={item.id}
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            whileHover={{ y: -2 }}
                            className="h-full"
                        >
                            <div className="h-full rounded-2xl border border-base-300 bg-base-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="p-5 md:p-6 flex flex-col h-full">
                                    {/* Top row: icon + meta badge */}
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                            <Icon className="h-6 w-6 text-primary" />
                                        </div>

                                        <span className="badge badge-primary badge-outline">
                                            {item.meta}
                                        </span>
                                    </div>

                                    {/* Accent line */}
                                    <div className="mt-4 h-1 w-12 rounded-full bg-primary/70" />

                                    {/* Content */}
                                    <h3 className="mt-4 text-lg font-extrabold leading-snug line-clamp-1">
                                        {item.title}
                                    </h3>

                                    <p className="mt-2 text-sm text-base-content/70 leading-relaxed line-clamp-3">
                                        {item.desc}
                                    </p>

                                    {/* Spacer to keep consistent heights */}
                                    <div className="flex-1" />

                                    {/* Optional CTA row (keeps layout professional) */}
                                    <div className="mt-5">
                                        <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                                            Learn more
                                            <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                                                →
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </SectionWrap>
    );
};

export default ServicesSection;
