import React from 'react'
import { useSwiper } from 'swiper/react'
import { PiCaretLeftBold, PiCaretRightBold} from "react-icons/pi"

export default function ProjectBttnSlider({containerStyles, btnStyles, iconsStyles}) {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button className={btnStyles}>
        <PiCaretLeftBold className={iconsStyles} onClick={()=> swiper.slidePrev()}/>
      </button>
      <button className={btnStyles}>
        <PiCaretRightBold className={iconsStyles} onClick={()=> swiper.slideNext()}/>
      </button>
    </div>
  )
}
