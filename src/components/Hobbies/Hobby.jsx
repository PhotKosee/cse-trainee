import Card from "../Card/Card";
import "./Hobby.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Hobbies } from "./storage";

function Hobby() {
    return (
        <div>
            <h1 className="title">Hobbies</h1>
            <div className="hobby-wrapper">
                <Swiper
                    slidesPerView={4.5}
                    slidesPerGroup={1}
                    loop={false}
                    breakpoints={{
                        0: {
                            slidesPerView: 1
                        },
                        400: {
                            slidesPerView: 1
                        },
                        640: {
                            slidesPerView: 2.5
                        },
                        900: {
                            slidesPerView: 3.5
                        },
                        1200: {
                            slidesPerView: 4.5
                        },
                    }}
                    className={'swiper'}
                >
                    {Hobbies.map((item) => {
                        return (
                            <SwiperSlide
                                key={item.id}
                            >
                                <Card
                                    key={item.id}
                                    title={item.title}
                                    image={item.image}
                                    sub={item.sub}
                                />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    );
};

export default Hobby;