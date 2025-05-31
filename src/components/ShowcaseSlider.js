import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import './ShowcaseSlider.css';

const slidesData = [
  { id: 1, src: '/images/sih-event1.jpg', alt: 'SIH Event 1' },
  { id: 2, src: '/images/sih-event2.jpg', alt: 'SIH Event 2' },
  { id: 3, src: '/images/certificate1.jpg', alt: 'Certificate 1' },
  { id: 4, src: '/images/certificate2.jpg', alt: 'Certificate 2' },
  // Add more images here
];

function ShowcaseSlider() {
  return (
    <section className="showcase-slider">
      <h3>My Achievements & Events</h3>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {slidesData.map(({ id, src, alt }) => (
          <SwiperSlide key={id}>
            <img src={src} alt={alt} className="slide-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default ShowcaseSlider;
