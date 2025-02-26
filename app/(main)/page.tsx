import Nosotros from '@/components/about/Nosotros'
import Services from '@/components/services/Services'
import MainImage from '@/components/ui/MainImage'
import React from 'react'

export default function page() {
  return (
    <main>
        <MainImage />
        <Nosotros />
        <Services />
    </main>
  )
}
