import Image from 'next/image'

export default function SectionTwo() {
  return (
    <section className="min-w-screen mx-auto p-0 sm:p-2 md:p-4 lg:p-8 xl:p-16">
      <Image
        src="/assets/Section2/section2bg.png"
        width={1000}
        height={1000}
        alt="logo"
        className="w-[95dvw]"
      />
      <div className="relative w-full p-4 text-center font-brilliant text-white sm:text-start xl:-translate-y-16">
        <div className="flex items-center justify-center space-x-2 text-3xl font-bold sm:justify-start xl:text-6xl">
          <span>14+</span>
          <span className="text-primary">REGIONS</span>
          <div className="mt-3 hidden h-2 w-full rounded-full border-2 border-white py-2 backdrop-blur-md sm:block"></div>
        </div>
        <p className="mt-3 text-sm uppercase tracking-wide text-gray-300 sm:text-base">
          Serving across the globe with a network of{' '}
          <span className="font-bold text-white">banks</span>
        </p>
      </div>
    </section>
  )
}
