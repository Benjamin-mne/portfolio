import './services.css';
import { ServiceArticle } from './ServiceArticle';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

export const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
      <Swiper
        breakpoints={{
          600: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}

        spaceBetween={30}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        
        modules={[Pagination, Navigation, Autoplay]}

        style={{
          "--swiper-pagination-color": "var(--color-primary)",
          "--swiper-pagination-bullet-inactive-color": "var(--color-primary-varient)",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "2px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
          marginLeft:'0rem',
          marginRight:'0rem',
          transition: 'var(--transition)'
        }}
        >
          <SwiperSlide>
            <ServiceArticle h3={'UI/UX Design'} aP={['Responsive Design', 'Adapted to Phones', 'Desktop Version', 'Real-Time Notifications', 'Color Theory' ]} />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceArticle h3={'Web Development'} aP={['Stack MERN', 'SPA & MPA', 'NoSQL & SQL Databases', 'CRUD & REST API', 'JWT' ]} />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceArticle h3={'Content Creation'} aP={['Image Edition', 'Video Edition', 'Sound Design', 'Manage Social Media', 'Update Websites as Needed' ]} />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}
