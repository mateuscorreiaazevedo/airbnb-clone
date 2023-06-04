import { Settings } from 'react-slick'

export const settings: Settings = {
  responsive: [
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 3,
        dots: false,
        infinite: false,
        speed: 500
      }
    },
    {
      breakpoint: 1140,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 3,
        dots: false,
        infinite: false,
        speed: 500
      }
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 4,
        dots: false,
        infinite: false,
        speed: 500
      }
    },
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 9,
        slidesToScroll: 4,
        dots: false,
        infinite: false,
        speed: 500
      }
    },
    {
      breakpoint: 1536,
      settings: {
        slidesToShow: 10,
        slidesToScroll: 5,
        dots: false,
        infinite: false,
        speed: 500
      }
    }
  ],
  slidesToShow: 12,
  slidesToScroll: 6,
  dots: false,
  infinite: false,
  speed: 500,
  arrows: false,
  draggable: false,
}
