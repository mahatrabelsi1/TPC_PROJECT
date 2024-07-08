import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import youtube from '../assets/images/avatar.png';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

export default function App() {
  return (
    <Swiper style={{marginTop:"-200px"}}
  modules={[Pagination, Scrollbar, A11y, Autoplay]} // Remove Navigation from the list
  spaceBetween={50}
  slidesPerView={3}
  pagination={{ clickable: true }}
  scrollbar={{ draggable: true }}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false
  }}
  loop={true}
>
  <SwiperSlide><img src={youtube} alt="Slide 1" /></SwiperSlide>
  <SwiperSlide><img src={youtube} alt="Slide 2" /></SwiperSlide>
  <SwiperSlide><img src={youtube} alt="Slide 3" /></SwiperSlide>
  <SwiperSlide><img src={youtube} alt="Slide 4" /></SwiperSlide>
</Swiper>
  );
}
