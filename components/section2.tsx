import Image from 'next/image'

export default function SectionTwo() {
  return (
    <section className="min-w-screen p-0 sm:p-2 md:p-4 lg:p-8 xl:p-16">
      <Image
        src="/assets/Section2/section2bg.png"
        width={1000}
        height={1000}
        alt="logo"
        className="w-[90dvw]"
      />
    </section>
  )
}
