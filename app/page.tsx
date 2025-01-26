import Hero from '@/components/hero'
import SectionTwo from '@/components/section2'
import SectionThree from '@/components/section3'
import SectionFour from '@/components/section4'

export default function Home() {
  return (
    <main className="grid max-w-screen-2xl gap-6 overflow-x-hidden lg:gap-12">
      <Hero />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </main>
  )
}
