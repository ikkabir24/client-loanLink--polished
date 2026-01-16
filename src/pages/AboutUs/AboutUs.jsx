import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    BadgeCheck,
    Users,
    FileText,
    CreditCard,
    LineChart,
    Handshake,
    HeartPulse,
} from "lucide-react";
import SectionWrap from "../../components/Shared/UI/SectionWrap";
import SectionHeading from "../../components/Shared/UI/SectionHeading";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import useAuth from "../../hooks/useAuth";


const values = [
    {
        id: 1,
        icon: ShieldCheck,
        title: "Security First",
        desc: "We protect user data with strict access control and secure authentication to keep your information safe.",
    },
    {
        id: 2,
        icon: BadgeCheck,
        title: "Transparency",
        desc: "Clear loan details, visible status changes, and straightforward application steps—no hidden surprises.",
    },
    {
        id: 3,
        icon: Handshake,
        title: "Fair Process",
        desc: "Verification and approvals follow a structured workflow so every application is handled responsibly.",
    },
    {
        id: 4,
        icon: HeartPulse,
        title: "People-Centered",
        desc: "Microloans should empower growth—education, business, and urgent needs—through supportive experiences.",
    },
];

const platformHighlights = [
    {
        id: 1,
        icon: FileText,
        title: "Fast Loan Applications",
        desc: "Apply with a clean, validated form and track progress in your dashboard.",
    },
    {
        id: 2,
        icon: Users,
        title: "Role-Based Dashboards",
        desc: "Borrower, Manager, and Admin dashboards ensure the right tools for each user type.",
    },
    {
        id: 3,
        icon: CreditCard,
        title: "Secure Fee Payments",
        desc: "Pay application fees securely and view transaction details when payment is completed.",
    },
    {
        id: 4,
        icon: LineChart,
        title: "Actionable Insights",
        desc: "Dashboards include overview cards and charts based on real data for quick decision making.",
    },
];

const AboutUs = () => {

    const {user, loading} = useAuth()

    const fadeUp = {
        hidden: { opacity: 0, y: 12 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.06, duration: 0.35, ease: "easeOut" },
        }),
    };

    if(loading) return <LoadingSpinner/>
    return (
        <main className="w-full">
            {/* HERO */}
            <section className="w-full">
                <div className="container mx-auto px-6 md:px-12 py-10 md:py-14">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            <p className="badge badge-primary badge-outline">About LoanLink</p>

                            <h1 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight">
                                Building a Clear, Secure, and Fair{" "}
                                <span className="text-primary">Microloan Platform</span>
                            </h1>

                            <p className="mt-4 text-base md:text-lg text-base-content/70">
                                LoanLink helps microloan providers and borrowers manage loan requests,
                                verification, approvals, and payments in one streamlined workflow.
                            </p>

                            <div className="mt-6 flex flex-col sm:flex-row gap-3">
                                <Link to="/all-loans" className="btn btn-primary">
                                    Explore Loans
                                </Link>
                                <Link to="/contact-us" className="btn btn-primary btn-outline">
                                    Contact Us
                                </Link>
                            </div>
                        </motion.div>

                        {/* Visual card (no external assets required) */}
                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
                            className="rounded-2xl border border-base-300 bg-base-100 shadow-sm p-6 md:p-7"
                        >
                            <h3 className="text-xl font-extrabold">What LoanLink Solves</h3>

                            <div className="mt-4 space-y-3 text-sm text-base-content/70">
                                <p className="flex items-start gap-3">
                                    <span className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                        <FileText className="h-5 w-5 text-primary" />
                                    </span>
                                    Track applications with clear status updates and timestamps.
                                </p>

                                <p className="flex items-start gap-3">
                                    <span className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                        <Users className="h-5 w-5 text-primary" />
                                    </span>
                                    Role-based dashboards keep the workflow organized for every team.
                                </p>

                                <p className="flex items-start gap-3">
                                    <span className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                        <CreditCard className="h-5 w-5 text-primary" />
                                    </span>
                                    Fee payment tracking improves accountability and reduces manual follow-ups.
                                </p>
                            </div>

                            <div className="mt-6 rounded-xl bg-base-200 p-4">
                                <p className="text-sm font-semibold">Mission</p>
                                <p className="mt-1 text-sm text-base-content/70">
                                    Make microloan management simple, transparent, and accessible for both borrowers and providers.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* VALUES */}
            <SectionWrap variant="default">
                <SectionHeading
                    title={
                        <>
                            Our Core <span className="text-primary">Values</span>
                        </>
                    }
                    subtitle="A professional platform requires trust, clarity, and a well-defined process."
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                    {values.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.id}
                                custom={i}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                className="h-full"
                            >
                                <div className="h-full rounded-2xl border border-base-300 bg-base-100 shadow-sm p-5 md:p-6">
                                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <Icon className="h-6 w-6 text-primary" />
                                    </div>

                                    <div className="mt-4 h-1 w-12 rounded-full bg-primary/70" />

                                    <h3 className="mt-4 text-lg font-extrabold line-clamp-1">
                                        {item.title}
                                    </h3>

                                    <p className="mt-2 text-sm text-base-content/70 leading-relaxed line-clamp-3">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </SectionWrap>

            {/* PLATFORM HIGHLIGHTS */}
            <SectionWrap variant="default">
                <SectionHeading
                    title={
                        <>
                            How the Platform <span className="text-primary">Works</span>
                        </>
                    }
                    subtitle="A streamlined workflow that supports borrowers, managers, and administrators."
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-5">
                    {platformHighlights.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.id}
                                custom={i}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                className="h-full"
                            >
                                <div className="h-full rounded-2xl border border-base-300 bg-base-100 shadow-sm p-5 md:p-6 flex gap-4">
                                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                        <Icon className="h-6 w-6 text-primary" />
                                    </div>

                                    <div className="min-w-0">
                                        <h3 className="text-lg font-extrabold line-clamp-1">
                                            {item.title}
                                        </h3>
                                        <p className="mt-2 text-sm text-base-content/70 leading-relaxed line-clamp-2">
                                            {item.desc}
                                        </p>

                                        <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                                            Learn more
                                            <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                                                →
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </SectionWrap>

            {/* CTA */}
            <SectionWrap variant="default">
                <div className="rounded-2xl border border-base-300 bg-base-200 p-6 md:p-8">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-extrabold">
                                Ready to get started with <span className="text-primary">LoanLink</span>?
                            </h2>
                            <p className="mt-2 text-sm md:text-base text-base-content/70 max-w-2xl">
                                Explore available loans or create an account to apply and track your applications in the dashboard.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                            {!user && <Link to="/signup" className="btn btn-primary">
                                Create Account
                            </Link>}
                            <Link to="/all-loans" className="btn btn-primary btn-outline">
                                Browse Loans
                            </Link>
                        </div>
                    </div>
                </div>
            </SectionWrap>
        </main>
    );
};

export default AboutUs;
