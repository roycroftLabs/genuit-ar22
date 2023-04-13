import React from "react"
import Slider from "react-slick"

const ArrowNext = ({ onClick }) => {
  return (
    <div
      className="hidden lg:block absolute -right-20 top-[50%] -translate-y-2/4 text-royal-blue hover:text-orange z-20 transition-colors cursor-pointer"
      onClick={onClick}
    >
      <svg width="41" height="40" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd">
          <path fill="currentColor" d="M0 0h41v40H0z" />
          <path
            stroke="#FFF"
            stroke-width="2"
            d="m18.5 25.864 6.364-6.364-6.364-6.364"
          />
        </g>
      </svg>
    </div>
  )
}
const ArrowBack = ({ onClick }) => {
  return (
    <div
      className="hidden lg:block absolute -left-20 top-[50%] -translate-y-2/4 text-royal-blue hover:text-orange z-20 transition-colors cursor-pointer"
      onClick={onClick}
    >
      <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd">
          <path fill="currentColor" d="M0 0h40v40H0z" />
          <path
            stroke="#FFF"
            stroke-width="2"
            d="M22.5 25.864 16.136 19.5l6.364-6.364"
          />
        </g>
      </svg>
    </div>
  )
}
function Carousel({ children, fade = false }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    fade: fade,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <ArrowNext />,
    prevArrow: <ArrowBack />,
  }

  return <Slider {...settings}>{children}</Slider>
}

export default Carousel
