import Hero from '@/components/hero'
import SectionTwo from '@/components/section2'
import SectionThree from '@/components/section3'
import SectionFour from '@/components/section4'
import SectionFive from '@/components/section5'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="grid gap-6 overflow-hidden lg:gap-12">
      <Hero />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />
    </main>
  )
}
