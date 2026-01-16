import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import {
    BriefcaseBusiness,
    GraduationCap,
    HeartPulse,
    Home,
    HandCoins,
    Tractor,
    Wallet,
    Car,
} from "lucide-react";

import SectionWrap from "../../Shared/UI/SectionWrap";
import SectionHeading from "../../Shared/UI/SectionHeading";

const categories = [
    {
        id: 1,
        title: "Business",
        value: "Business",
        icon: BriefcaseBusiness,
        desc: "Support your small business, inventory, or working capital needs.",
        meta: "Popular",
    },
    {
        id: 2,
        title: "Education",
        value: "Education",
        icon: GraduationCap,
        desc: "Cover tuition fees, training costs, or learning resources.",
        meta: "Student-friendly",
    },
    {
        id: 3,
        title: "Medical",
        value: "Medical",
        icon: HeartPulse,
        desc: "Manage healthcare expenses and urgent medical support.",
        meta: "Urgent",
    },
    {
        id: 4,
        title: "Home Improvement",
        value: "Home",
        icon: Home,
        desc: "Renovation, repairs, or essential home upgrades.",
        meta: "Flexible",
    },
    {
        id: 5,
        title: "Agriculture",
        value: "Agriculture",
        icon: Tractor,
        desc: "Farming support: equipment, seeds, irrigation, and seasonal needs.",
        meta: "Seasonal",
    },
    {
        id: 6,
        title: "Personal",
        value: "Personal",
        icon: Wallet,
        desc: "Personal needs with clear EMI plans and transparent terms.",
        meta: "Easy EMI",
    },
    {
        id: 7,
        title: "Emergency",
        value: "Emergency",
        icon: HandCoins,
        desc: "Fast support for unexpected expenses and critical situations.",
        meta: "Fast",
    },
    {
        id: 8,
        title: "Vehicle",
        value: "Vehicle",
        icon: Car,
        desc: "Repair or maintenance support for essential commuting needs.",
        meta: "Reliable",
    },
];

const CategoriesSection = () => {
    
    const cardVariants = {
        hidden: { opacity: 0, y: 14 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.05, duration: 0.35, ease: "easeOut" },
        }),
    };

    return (
        <SectionWrap className="bg-base-100" variant="default">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6">
                <SectionHeading
                    title={
                        <>
                            Browse by <span className="text-primary">Category</span>
                        </>
                    }
                    subtitle="Find loan options faster by selecting a category that matches your needs."
                />
                
            </div>

            <div className="mt-6 md:mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
                {categories.map((cat, index) => {
                    const Icon = cat.icon;

                    return (
                        <motion.div
                            key={cat.id}
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            whileHover={{ y: -2 }}
                            className="h-full"
                        >
                            {/* Clickable category card */}
                            <Link
                                to={`/all-loans?category=${encodeURIComponent(cat.value)}`}
                                className="h-full block rounded-2xl border border-base-300 bg-base-100 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="p-4 md:p-5 h-full flex flex-col">
                                    {/* top: icon + meta */}
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center">
                                            <Icon className="h-6 w-6 text-primary" />
                                        </div>

                                        <span className="badge badge-primary badge-outline">
                                            {cat.meta}
                                        </span>
                                    </div>

                                    {/* title */}
                                    <h3 className="mt-4 text-base md:text-lg font-extrabold leading-snug line-clamp-1">
                                        {cat.title}
                                    </h3>

                                    {/* description */}
                                    <p className="mt-2 text-sm text-base-content/70 leading-relaxed line-clamp-2">
                                        {cat.desc}
                                    </p>

                                    <div className="flex-1" />

                                    {/* mini CTA */}
                                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                                        Explore
                                        <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                                            →
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    );
                })}
            </div>
        </SectionWrap>
    );
};

export default CategoriesSection;
