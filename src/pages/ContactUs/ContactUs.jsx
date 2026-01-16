import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import SectionWrap from "../../components/Shared/UI/SectionWrap";
import SectionHeading from "../../components/Shared/UI/SectionHeading";


const ContactUs = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    const onSubmit = async (values) => {
        try {
            setIsSubmitting(true);
            await new Promise((r) => setTimeout(r, 800));

            toast.success("Message sent successfully! We will contact you soon.");
            reset();
        } catch (err) {
            toast.error(err?.message || "Failed to send message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="w-full bg-base-100">
            
            <section className="w-full bg-base-200">
                <div className="container mx-auto px-6 md:px-12 py-10 md:py-12">
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="max-w-3xl"
                    >
                        <p className="badge badge-primary badge-outline">Contact</p>
                        <h1 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight">
                            Get in Touch with <span className="text-primary">LoanLink</span>
                        </h1>
                        <p className="mt-3 text-base md:text-lg text-base-content/70">
                            Have questions about loans, applications, approvals, or payments?
                            Send us a message and our support team will help you.
                        </p>
                    </motion.div>
                </div>
            </section>

            
            <SectionWrap className="bg-base-100" variant="default">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6 items-start">
                    {/* Left: Contact info cards */}
                    <div className="lg:col-span-1 space-y-4 md:space-y-5">
                        <div className="rounded-2xl border border-base-300 bg-base-100 shadow-sm p-6 md:p-7">
                            <h2 className="text-xl font-extrabold">Contact Information</h2>
                            <p className="mt-2 text-sm text-base-content/70">
                                Use the details below or send a message using the form.
                            </p>

                            <div className="mt-5 space-y-4">
                                <a
                                    href="mailto:support@loanlink.com"
                                    className="flex items-start gap-3 rounded-xl bg-base-200 p-4 hover:bg-base-200/80 transition-colors"
                                >
                                    <span className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                        <Mail className="h-5 w-5 text-primary" />
                                    </span>
                                    <div className="min-w-0">
                                        <p className="font-semibold">Email</p>
                                        <p className="text-sm text-base-content/70 break-all">
                                            support@loanlink.com
                                        </p>
                                    </div>
                                </a>

                                <a
                                    href="tel:+8801000000000"
                                    className="flex items-start gap-3 rounded-xl bg-base-200 p-4 hover:bg-base-200/80 transition-colors"
                                >
                                    <span className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                        <Phone className="h-5 w-5 text-primary" />
                                    </span>
                                    <div className="min-w-0">
                                        <p className="font-semibold">Phone</p>
                                        <p className="text-sm text-base-content/70">
                                            +880 10 0000 0000
                                        </p>
                                    </div>
                                </a>

                                <div className="flex items-start gap-3 rounded-xl bg-base-200 p-4">
                                    <span className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                        <MapPin className="h-5 w-5 text-primary" />
                                    </span>
                                    <div className="min-w-0">
                                        <p className="font-semibold">Office</p>
                                        <p className="text-sm text-base-content/70">
                                            Rajshahi, Bangladesh
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 rounded-xl bg-base-200 p-4">
                                    <span className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                        <Clock className="h-5 w-5 text-primary" />
                                    </span>
                                    <div className="min-w-0">
                                        <p className="font-semibold">Support Hours</p>
                                        <p className="text-sm text-base-content/70">
                                            Sat–Thu: 10:00 AM – 6:00 PM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div className="rounded-2xl border border-base-300 bg-base-200 p-6 md:p-7">
                            <h3 className="text-lg font-extrabold">
                                Before You Send a Message
                            </h3>
                            <ul className="mt-3 space-y-2 text-sm text-base-content/70">
                                <li>• Include your registered email for faster support.</li>
                                <li>• Mention the loan title or application ID (if available).</li>
                                <li>• For payment issues, include transaction details if you have them.</li>
                            </ul>
                        </div>
                    </div>

                 
                    <div className="lg:col-span-2 space-y-4 md:space-y-5">
                        <div className="rounded-2xl border border-base-300 bg-base-100 shadow-sm p-6 md:p-7">
                            <SectionHeading
                                title={
                                    <>
                                        Send a <span className="text-primary">Message</span>
                                    </>
                                }
                                subtitle="We typically reply within 24 hours during support hours."
                                align="left"
                            />

                            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Name */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Full Name</span>
                                        </label>
                                        <input
                                            type="text"
                                            className={`input input-bordered w-full ${errors.name ? "input-error" : ""
                                                }`}
                                            placeholder="Enter your name"
                                            {...register("name", {
                                                required: "Name is required",
                                                minLength: { value: 2, message: "Minimum 2 characters" },
                                            })}
                                        />
                                        {errors.name && (
                                            <p className="mt-1 text-sm text-error">{errors.name.message}</p>
                                        )}
                                    </div>

                                    {/* Email */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Email</span>
                                        </label>
                                        <input
                                            type="email"
                                            className={`input input-bordered w-full ${errors.email ? "input-error" : ""
                                                }`}
                                            placeholder="you@example.com"
                                            {...register("email", {
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                    message: "Please enter a valid email address",
                                                },
                                            })}
                                        />
                                        {errors.email && (
                                            <p className="mt-1 text-sm text-error">{errors.email.message}</p>
                                        )}
                                    </div>
                                </div>

                             
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Subject</span>
                                    </label>
                                    <input
                                        type="text"
                                        className={`input input-bordered w-full ${errors.subject ? "input-error" : ""
                                            }`}
                                        placeholder="e.g., Loan application status / Payment issue"
                                        {...register("subject", {
                                            required: "Subject is required",
                                            minLength: { value: 3, message: "Minimum 3 characters" },
                                        })}
                                    />
                                    {errors.subject && (
                                        <p className="mt-1 text-sm text-error">{errors.subject.message}</p>
                                    )}
                                </div>

                       
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Message</span>
                                    </label>
                                    <textarea
                                        className={`textarea textarea-bordered w-full min-h-[140px] ${errors.message ? "textarea-error" : ""
                                            }`}
                                        placeholder="Write your message clearly..."
                                        {...register("message", {
                                            required: "Message is required",
                                            minLength: { value: 10, message: "Minimum 10 characters" },
                                        })}
                                    />
                                    {errors.message && (
                                        <p className="mt-1 text-sm text-error">{errors.message.message}</p>
                                    )}
                                </div>

                            
                                <button
                                    type="submit"
                                    className="btn btn-primary w-full md:w-fit"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="loading loading-spinner loading-sm"></span>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="h-4 w-4" /> Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>

                 
                        <div className="rounded-2xl border border-base-300 bg-base-100 shadow-sm overflow-hidden">
                            <div className="p-5 md:p-6">
                                <h3 className="text-lg font-extrabold">Our Location</h3>
                                <p className="mt-2 text-sm text-base-content/70">
                                    You can visit our office for in-person support (appointment recommended).
                                </p>
                            </div>

                            <div className="relative w-full aspect-[16/9]">
                                <iframe
                                    title="LoanLink Office Location"
                                    className="absolute inset-0 w-full h-full"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    src="https://www.google.com/maps?q=Rajshahi%20Bangladesh&output=embed"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrap>
        </main>
    );
};

export default ContactUs;
