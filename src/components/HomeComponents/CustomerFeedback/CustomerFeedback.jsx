import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

import SectionWrap from "../../Shared/UI/SectionWrap";
import SectionHeading from "../../Shared/UI/SectionHeading";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CustomerFeedback = () => {
    useEffect(() => {
        AOS.init({
            duration: 500,
            easing: "ease-out",
            once: true,
            offset: 80,
        });
    }, []);

    const feedbacks = [
        {
            id: 1,
            name: "Rahim Uddin",
            role: "Small Business Owner",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNfWDN4AwsmQHxtFDIG_b9xP9Dvs6PH40ffg&s",
            message:
                "LoanLink made my loan application easier than ever. The approval was fast and transparent. Highly recommended!",
        },
        {
            id: 2,
            name: "Sadia Akter",
            role: "Entrepreneur",
            image: "https://i1.rgstatic.net/ii/profile.image/1112926656167937-1642353800627_Q512/Sadia-Akter-14.jpg",
            message:
                "The EMI options and affordable interest rate helped me grow my small business. Fantastic service!",
        },
        {
            id: 4,
            name: "Nusrat Jahan",
            role: "Borrower",
            image: "https://image.tmdb.org/t/p/w500/jIhr2Ookz1qba79Mn00q44L5VH7.jpg",
            message:
                "Customer service was friendly and helpful. LoanLink is truly a lifesaver during urgent needs.",
        },

        // +5 new reviews (add your image links later)
        {
            id: 5,
            name: "Leo Messi",
            role: "The GOAT",
            image: "https://tse2.mm.bing.net/th/id/OIP.rz3PFyI5j-ZSWNcoohXqPQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
            message:
                "Que Miras Bobo.",
        },
        {
            id: 6,
            name: "Tanvir Hasan",
            role: "Borrower",
            image: "https://tse1.mm.bing.net/th/id/OIP.OzJvFXY2sv6RoSg6qAGWbAHaHX?rs=1&pid=ImgDetMain&o=7&rm=3",
            message:
                "I liked the transparent loan details and EMI options. The dashboard made repayment tracking very easy.",
        },
        {
            id: 7,
            name: "Farzana Islam",
            role: "Freelancer",
            image: "https://i1.rgstatic.net/ii/profile.image/11431281146252284-1681497008988_Q512/Farzana-Islam-9.jpg",
            message:
                "Fast decision process and a clean interface. I received timely updates from submission to approval.",
        },
        {
            id: 8,
            name: "Anower Chowdhury",
            role: "Small Business Owner",
            image: "https://tse4.mm.bing.net/th/id/OIP.Ps-Ap8BtERJUFLoOcUJenAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
            message:
                "LoanLink feels professional and secure. The verification step helped me trust the overall process.",
        },
        {
            id: 9,
            name: "Ananya Pandey",
            role: "Actress",
            image: "https://tse2.mm.bing.net/th/id/OIP.6W2OCFTXKUgrY-V0Y2L1FwHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3",
            message:
                "Great experience overall. The requirements were listed clearly and the whole flow felt organized and reliable.",
        },
    ];

    return (
        <SectionWrap className="bg-base-100" variant="default">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6">
                <SectionHeading
                    title="What Our Customers Say"
                    subtitle="Reviews from borrowers who used LoanLink to apply and track their loans."
                />
            </div>

            <div className="mt-6 md:mt-8">
                <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    slidesPerView={1}
                    spaceBetween={14}
                    loop={true}
                    pagination={{ clickable: true }}
                    navigation
                    autoplay={{ delay: 1500, disableOnInteraction: false }}
                    breakpoints={{
                        768: { slidesPerView: 2, spaceBetween: 16 },
                        1024: { slidesPerView: 3, spaceBetween: 18 },
                    }}
                    className="pb-10"
                >
                    {feedbacks.map((fb) => (
                        <SwiperSlide key={fb.id}>
                            <div
                                data-aos="fade-up"
                                className="h-full"
                            >
                                {/* Fixed height card */}
                                <div className="h-[280px] rounded-2xl border border-base-300 bg-base-100 shadow-sm hover:shadow-md transition-shadow p-5 md:p-6 flex flex-col">
                                    {/* Top row */}
                                    <div className="flex items-start justify-between">
                                        <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                            <FaQuoteLeft className="text-primary" />
                                        </div>
                                        <span className="badge badge-primary badge-outline">
                                            Verified
                                        </span>
                                    </div>

                                    {/* Message (fixed area) */}
                                    <p className="mt-4 text-sm md:text-base text-base-content/70 line-clamp-4">
                                        {fb.message}
                                    </p>

                                    {/* Spacer pushes user area to bottom (consistent height) */}
                                    <div className="flex-1" />

                                    {/* User row */}
                                    <div className="mt-5 flex items-center gap-3 border-t border-base-300 pt-4">
                                        <div className="avatar">
                                            <div className="w-12 rounded-full ring-2 ring-primary/20">
                                                <img
                                                    src={fb.image}
                                                    alt={fb.name}
                                                    referrerPolicy="no-referrer"
                                                />
                                            </div>
                                        </div>

                                        <div className="min-w-0">
                                            <p className="font-extrabold leading-tight line-clamp-1">
                                                {fb.name}
                                            </p>
                                            <p className="text-sm text-base-content/60 line-clamp-1">
                                                {fb.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </SectionWrap>
    );
};

export default CustomerFeedback;
