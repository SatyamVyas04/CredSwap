import Image from 'next/image'

export default function Section5() {
  return (
    <section className="relative font-brilliant lg:min-h-screen">
      <Image
        src="/assets/Section5/section5bg.png"
        height={1000}
        width={1000}
        alt="bg graphics"
        className="absolute right-0 -z-10 hidden h-fit lg:block"
      />
      <div className="flex h-full flex-col items-center justify-center text-center lg:items-start lg:text-start">
        <article className="flex max-w-3xl flex-col items-center gap-4 lg:flex-row lg:gap-8">
          <div
            data-aos="fade-right"
            data-aos-duration="300"
            data-aos-delay="50"
            className="hidden h-32 w-40 self-end bg-primary lg:block"
          ></div>
          <h1 className="text-4xl font-extrabold lg:text-8xl">THE MARKET</h1>
        </article>
        <article className="flex max-w-3xl flex-col items-center gap-4 lg:flex-row lg:gap-8">
          <div
            data-aos="fade-right"
            data-aos-duration="300"
            data-aos-delay="50"
            className="hidden h-24 w-[420px] bg-primary pr-16 lg:block"
          ></div>
          <p className="px-4 py-2 text-lg uppercase tracking-tighter lg:px-0 lg:py-8">
            With over 1 billion credit cards globally, a significant percentage
            of perks remain unused. CredSwap targets this untapped market,
            providing value for both cardholders and users.
          </p>
        </article>
        <article className="flex max-w-3xl flex-col items-center gap-4 lg:flex-row lg:gap-8">
          <div
            data-aos="fade-right"
            data-aos-duration="300"
            data-aos-delay="50"
            className="hidden h-24 w-[500px] bg-primary lg:block"
          ></div>
        </article>
        <article className="mt-12 flex max-w-3xl flex-col items-center gap-4 lg:flex-row lg:gap-8">
          <div
            data-aos="fade-right"
            data-aos-duration="300"
            data-aos-delay="50"
            className="hidden h-24 w-[700px] bg-primary lg:block"
          ></div>
        </article>
      </div>
    </section>
  )
}
