import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

import SectionWrap from "../../Shared/UI/SectionWrap";
import SectionHeading from "../../Shared/UI/SectionHeading";

const NewsletterSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "",
            consent: true,
        },
    });

    const onSubmit = async () => {
        try {
            setIsSubmitting(true);
            await new Promise((r) => setTimeout(r, 700));

            toast.success("Subscribed successfully!");
            reset();
        } catch (err) {
            toast.error(err?.message || "Subscription failed. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <SectionWrap variant="default">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 items-stretch">
                {/* Left content */}
                <div className="rounded-2xl border border-base-300 bg-base-100 shadow-sm p-6 md:p-7 flex flex-col">
                    <SectionHeading
                        title={
                            <>
                                Get Loan Updates in Your <span className="text-primary">Inbox</span>
                            </>
                        }
                        subtitle="Receive updates on new loan options, policy changes, and tips to complete applications faster."
                        align="left"
                    />

                    <div className="mt-4 space-y-3 text-sm text-base-content/70">
                        <div className="flex items-start gap-3">
                            <span className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                <Mail className="h-5 w-5 text-primary" />
                            </span>
                            <div>
                                <p className="font-semibold text-base-content">Useful loan tips</p>
                                <p>Short, practical guidance for borrowers and small business owners.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                <ArrowRight className="h-5 w-5 text-primary" />
                            </span>
                            <div>
                                <p className="font-semibold text-base-content">No spam</p>
                                <p>Only important updates. You can unsubscribe anytime.</p>
                            </div>
                        </div>
                    </div>

                    {/* small trust row */}
                    <div className="mt-6 flex flex-wrap items-center gap-2">
                        <span className="badge badge-primary badge-outline">Secure</span>
                        <span className="badge badge-primary badge-outline">Monthly Updates</span>
                        <span className="badge badge-primary badge-outline">Unsubscribe Anytime</span>
                    </div>
                </div>

                {/* Right form */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="rounded-2xl border border-base-300 bg-base-100 shadow-sm p-6 md:p-7"
                >
                    <h3 className="text-xl md:text-2xl font-extrabold">
                        Subscribe to Newsletter
                    </h3>
                    <p className="mt-2 text-sm text-base-content/70">
                        Enter your email to receive updates. We respect your privacy.
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)} className="mt-5 space-y-4">
                        {/* Email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email Address</span>
                            </label>

                            <div className="join w-full">
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    className={`input input-bordered join-item w-full ${errors.email ? "input-error" : ""
                                        }`}
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Please enter a valid email address",
                                        },
                                    })}
                                />

                                <button
                                    type="submit"
                                    className="btn btn-primary join-item"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="loading loading-spinner loading-sm"></span>
                                            Subscribing...
                                        </>
                                    ) : (
                                        <>
                                            Subscribe <ArrowRight className="h-4 w-4" />
                                        </>
                                    )}
                                </button>
                            </div>

                            {errors.email && (
                                <p className="mt-2 text-sm text-error">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Consent */}
                        <div className="form-control">
                            <label className="label cursor-pointer justify-start gap-3">
                                <input
                                    type="checkbox"
                                    className="checkbox checkbox-primary"
                                    {...register("consent", {
                                        required: "You must agree to receive emails",
                                    })}
                                />
                                <span className="label-text text-sm text-base-content/70">
                                    I agree to receive emails from LoanLink (you can unsubscribe anytime).
                                </span>
                            </label>

                            {errors.consent && (
                                <p className="mt-1 text-sm text-error">{errors.consent.message}</p>
                            )}
                        </div>

                        {/* Privacy note */}
                        <div className="rounded-xl bg-base-200 p-4 text-sm text-base-content/70">
                            We store your email only for sending updates. We do not sell or share your data.
                        </div>
                    </form>
                </motion.div>
            </div>
        </SectionWrap>
    );
};

export default NewsletterSection;
