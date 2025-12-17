import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

import quartaSo from '../../Assets/images/image.quartaSo.webp'
import espumantes from '../../Assets/images/image.espumantes.webp'

import { Hero } from './styles'

const HeroCarousel = () => {
  const Slides = [
    {
      id: 1,
      image: quartaSo,
      alt: 'Aproveita quartaSó na próxima quarta'
    },
    {
      id: 2,
      image: espumantes,
      alt: 'Aproveite os melhores espumantes para o festas'
    }
  ]
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      effect="fade"
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      speed={1500}
    >
      {Slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <Hero style={{ backgroundImage: `url(${slide.image})` }}>
            <div className="overlay">
              <p>{slide.alt}</p>
            </div>
          </Hero>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default HeroCarousel
