import style from "./Slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

export default function Slider({ images }) {
  return (
    <Swiper pagination={true} modules={[Pagination]} className={style.slider}>
      {images.slice(0, 3).map((image, index) => (
        <SwiperSlide key={index}>
          <div className={style.imageWrapper}>
            <img src={image} alt="slider" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
