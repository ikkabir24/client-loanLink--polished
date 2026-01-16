import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Template slides (replace images later)
const slides = [
    {
        id: 1,
        title: "Fast Microloans, Without the Hassle",
        image: "/hero/loan-1.png",
        cta: { label: "Explore Loans", to: "/all-loans" },
    },
    {
        id: 2,
        title: "Transparent Rates. Flexible EMI Plans.",
        image: "/hero/loan-2.png",
        cta: { label: "Browse All Loans", to: "/all-loans" },
    },
    {
        id: 3,
        title: "Built for Borrowers, Managers, and Admins",
        image: "/hero/loan-3.png",
        cta: { label: "Go to Dashboard", to: "/dashboard" },
    },
];

const HeroBanner = () => {
    return (
        <section className="w-full">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{ delay: 4500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation
                loop
                className="h-[60vh] md:h-[70vh]"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div
                            className="relative h-full w-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            {/* Gradient overlay for readability (dark mode safe) */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20 dark:from-black/80 dark:via-black/60 dark:to-black/30" />

                            {/* Decorative blobs (primary-heavy) */}
                            <div className="absolute -top-16 -left-16 h-56 w-56 rounded-full bg-primary/25 blur-3xl" />
                            <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />

                            {/* Content (Global spacing rule) */}
                            <div className="relative z-10 flex h-full items-center">
                                <div className="container mx-auto px-6 md:px-12">
                                    <motion.div
                                        initial={{ opacity: 0, y: 28 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6 }}
                                        className="max-w-xl rounded-2xl bg-black/25 dark:bg-black/35 backdrop-blur-md p-6 md:p-8 text-white border border-white/10 shadow-lg"
                                    >
                                        {/* Small badge */}
                                        <div className="badge badge-outline mb-4">
                                            LoanLink • Microloans
                                        </div>

                                        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
                                            {slide.title}
                                        </h1>

                                        <div className="mt-6 flex flex-wrap gap-3 md:gap-4">
                                            <Link to={slide.cta.to} className="btn btn-primary">
                                                {slide.cta.label}
                                            </Link>

                                            <Link
                                                to="/contact-us"
                                                className="btn btn-outline border-white/50 text-white hover:border-primary hover:text-white"
                                            >
                                                Contact Us
                                            </Link>
                                        </div>

                                        {/* Micro trust line */}
                                        <p className="mt-5 text-sm text-white/70">
                                            Secure login • Role-based dashboard • Real-time tracking
                                        </p>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Scroll hint */}
                            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/80 animate-bounce">
                                ↓
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default HeroBanner;
