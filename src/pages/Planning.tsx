import React from "react";
import PlanBox from "../components/PlanBox";

// import Swiper core and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Planning = () => {
    return (
        <div className="flex flex-col ">
            <div className="w-[27rem] mt-10 mx-10">
                <h1 className="font-bold text-3xl text-[#474646] mb-5">Perencanaan dana</h1>
                <h1 className="text-sm text-[#474646]">Lihat dan rencanakan keuanganmu dalam satu bulan!</h1>
            </div>
            <div className="">
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                        clickable: true
                    }}
                    modules={[Pagination]}
                >
                    <SwiperSlide><PlanBox progress={50} initial={250000} category="Transportasi" color="#8A81E4" /></SwiperSlide>
                    <SwiperSlide><PlanBox progress={120} initial={500000} category="Makanan" color="#FF6240" /></SwiperSlide>
                    <SwiperSlide><PlanBox progress={75} initial={250000} category="Lainnya" color="#F7CE50" /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Planning;
