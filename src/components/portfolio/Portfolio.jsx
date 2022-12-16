import './portfolio.css';
import { PortfolioArticle } from './PortfolioArticle';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";


import CHATTAPP from '../../img/chat-app-preview.png';
import VIDEOAPP from '../../img/video-app-preview.png';
import QUIZAPP from '../../img/quiz-app-preview.png';
import PORTFOLIO from '../../img/portfolio-preview.png';


export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container" >
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
          transition: 'var(--transition)',
        }}
        >
          <SwiperSlide>
            <PortfolioArticle title={'Video App'} IMG={VIDEOAPP} tags={['Stack MERN', 'Firebase', 'JS', 'JWT']} gitRef={'https://github.com/Benjamin-mne/video-app'} videoRef={'https://youtu.be/cGjJlv5tZAA'}/>
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioArticle title={'Chat App'} IMG={CHATTAPP} tags={['CSS', 'Firebase', 'HTML', 'JavaScript']} gitRef={'https://github.com/Benjamin-mne/chat-app'} videoRef={'https://youtu.be/IKnpzU9GzTs'} />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioArticle title={'Quiz App'} IMG={QUIZAPP} tags={['CSS', 'HTML', 'JS', 'React', 'Netlify']} gitRef={'https://github.com/Benjamin-mne/quiz-app'} videoRef={'https://6392df073e70ef759dace53c--peaceful-mermaid-46d000.netlify.app/'} />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioArticle title={'Portfolio'} IMG={PORTFOLIO} tags={['CSS', 'HTML', 'JavaScript', 'React']} videoRef={'#'}/>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}
