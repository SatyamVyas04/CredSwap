'use client'

import { useLayoutEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const AOSInit = () => {
  useLayoutEffect(() => {
    AOS.init({
      easing: 'ease-out-quad',
      duration: 300,
      once: true,
    })
  }, [])

  return null
}
