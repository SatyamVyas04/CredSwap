import Image from 'next/image'

export default function SectionTwo() {
  return (
    <section className="p-0 sm:p-2 md:p-4 lg:p-8 xl:p-16">
      <Image
        src="/assets/Section2/section2bg.png"
        width={2000}
        height={2000}
        alt="logo"
        className="w-full"
      />
    </section>
  )
}
