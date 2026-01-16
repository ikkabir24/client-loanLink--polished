import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import {
    BadgeCheck,
    ShieldCheck,
    CalendarClock,
    LayoutDashboard,
    CreditCard,
    FileSearch,
} from "lucide-react";

import SectionWrap from "../../Shared/UI/SectionWrap";
import SectionHeading from "../../Shared/UI/SectionHeading";

const highlights = [
    {
        id: 1,
        icon: FileSearch,
        title: "Structured Verification",
        desc: "Managers can verify applications with clear status updates and review history.",
        meta: "Manager Tools",
        to: "/all-loans",
    },
    {
        id: 2,
        icon: BadgeCheck,
        title: "Transparent Approval Flow",
        desc: "Approve or reject applications with real-time status changes and timestamps.",
        meta: "Audit-friendly",
        to: "/dashboard",
    },
    {
        id: 3,
        icon: CalendarClock,
        title: "EMI Planning Support",
        desc: "Loan details include EMI plan support to help borrowers choose comfortable repayment.",
        meta: "Flexible",
        to: "/all-loans",
    },
    {
        id: 4,
        icon: CreditCard,
        title: "Stripe Fee Payment",
        desc: "Pay a fixed application fee securely and view transaction details inside your dashboard.",
        meta: "Secure Payments",
        to: "/dashboard/my-loans",
    },
    {
        id: 5,
        icon: LayoutDashboard,
        title: "Role-Based Dashboards",
        desc: "Borrower, Manager, and Admin each get a focused dashboard with relevant actions.",
        meta: "RBAC",
        to: "/dashboard",
    },
    {
        id: 6,
        icon: ShieldCheck,
        title: "Protected Access",
        desc: "JWT + Firebase authentication protects private routes and sensitive actions.",
        meta: "Protected",
        to: "/login",
    },
];

const HighlightsSection = () => {

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
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6">
                <SectionHeading
                    title={
                        <>
                            Platform <span className="text-primary">Highlights</span>
                        </>
                    }
                    subtitle="Built to simplify microloan requests, approvals, repayments, and secure payments."
                />
            </div>

            <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                {highlights.map((item, index) => {
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
                                    {/* Top row */}
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

                                    <div className="flex-1" />

                                    {/* CTA */}
                                    <div className="mt-5">
                                        <Link
                                            to={item.to}
                                            className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
                                        >
                                            Learn more
                                            <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                                                →
                                            </span>
                                        </Link>
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

export default HighlightsSection;
