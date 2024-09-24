import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import '../css/swiper.css';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

import i18n from '../i18n';
import { useTranslation } from "react-i18next";

const Carousel = () => {
  const { t } = useTranslation();

  const bgImage = (fileName) => {
    return {
      backgroundImage: `url("./assets/${fileName}")`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };
  };

  return (
    <div className='md:my-10 my-2 w-screen lg:h-720 md:h-96 h-56 relative'>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
      {[1,2,3,4].map((num) =>
        <SwiperSlide key={num} className="flex-col justify-between" style={bgImage(`photo_${num}.jpg`)}>
        <div className='flex justify-start'>
          <h4 className={`mx-3 mt-3 p-1
            shadow-lg bg-secondary opacity-75
            rounded
            md:text-lg text-sm text-dark`}>
            {t(`projects.project_${num}.title`)}
          </h4>
        </div>
        <div className='flex justify-end'>
          <div className={`mx-3 sm:mb-3 mb-2
            shadow-lg bg-secondary opacity-75
            rounded
            md:text-lg text-xs text-dark
            md:basis-1/3 basis-auto`}>
            <p>{t(`projects.project_${num}.summary`)}</p>
            <br className='sm:hidden'/>
          </div>
        </div>
        </SwiperSlide>
      )}

      </Swiper>
    </div>
  );
}


export default Carousel;
