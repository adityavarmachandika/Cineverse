import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import doctorStrange from '../assets/homepage_photos/doctorStrange.png';
import johnWick from '../assets/homepage_photos/jhonwick1.jpg';
import dilBechara from '../assets/homepage_photos/dil_bechara.png'
import batman from '../assets/homepage_photos/batman.jpg'
import breakingbad from '../assets/homepage_photos/breakingbad.jpg'
const Header = () => {

  const images=[
    johnWick,
    dilBechara,
    batman,
    breakingbad,
  ];
  return (
    <div className='relative '>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={false}
        style={{ width: '100%', height: '100vh', zIndex: '10' }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                backgroundImage: `linear-gradient(0deg, rgb(0, 0, 0) 8.2%, transparent 50%),url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100%',
              }}
            >
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Header;
