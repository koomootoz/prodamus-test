import React, {FunctionComponent} from "react"
import { Swiper, SwiperSlide } from 'swiper/react'

export interface Props {
  slides: JSX.Element[],
}

const Gallery: FunctionComponent<Props> = ({ slides }) => {
  return (
    <Swiper
      slidesPerView={3}
      centeredSlides={true}
      spaceBetween={24}
    >
      {slides.map((slide, idx) => (
        <SwiperSlide key={idx}>
          {slide}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Gallery
