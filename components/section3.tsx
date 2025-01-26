import Image from 'next/image'

export default function Section3() {
  return (
    <section className="relative w-screen sm:min-h-screen">
      <Image
        width={2000}
        height={2000}
        alt="bg graphics"
        className="absolute -z-10 h-full object-cover"
        src="/assets/Section3/section3bg.png"
      />

      <Image
        width={500}
        height={500}
        alt="bg graphics"
        className="absolute bottom-0 right-0 -z-10 hidden lg:block xl:z-10"
        src="/assets/Section3/cards.png"
      />

      <section className="grid grid-cols-1 gap-4 p-4 font-brilliant uppercase lg:grid-cols-[65%_35%] lg:p-16">
        <article className="rounded-3xl bg-black/50 p-4 text-center backdrop-blur-lg lg:p-12 lg:text-start">
          <h1 className="text-3xl font-bold lg:text-5xl">Our Vision</h1>
          <p className="mt-2 text-sm lg:mt-4 lg:text-base">
            To create a community where credit card perks are accessible and
            beneficial to all, fostering trust, transparency, and collaboration.
          </p>
        </article>
        <article className="rounded-3xl bg-black/50 p-4 text-center backdrop-blur-lg lg:row-span-2 lg:place-items-end lg:rounded-none lg:border-none lg:bg-transparent lg:p-8 lg:text-end lg:backdrop-blur-0">
          <h1 className="text-3xl font-bold lg:text-6xl">
            Our <span className="text-primary">S</span>tory
          </h1>
          <p className="mt-2 lg:mt-4 lg:max-w-sm">
            At Cred wap, we’re transforming how people experience credit card
            benefits. We empower individuals by enabling them to share and
            access perks seamlessly, creating a world where financial
            opportunities are open to everyone.
          </p>
          <button className="mt-4 rounded-md bg-background px-4 py-2 text-base font-bold uppercase text-white shadow-lg shadow-primary ring-1 ring-primary transition duration-300 ease-in-out hover:bg-primary hover:shadow-xl focus:outline-none focus:ring-4 lg:mt-4">
            Learn More
          </button>
        </article>
        <article
          className="mt-4 text-center text-4xl font-extrabold tracking-wide lg:text-start lg:text-7xl"
          style={{ mixBlendMode: 'difference' }}
        >
          Not your average credit saviour
        </article>
      </section>

      <section className="max-w-6xl p-4 text-center font-brilliant uppercase lg:p-12 lg:text-start">
        <article className="rounded-3xl bg-black/50 p-4 backdrop-blur-lg lg:p-12">
          <h1 className="text-3xl font-bold lg:text-5xl">Our Mission</h1>
          <p className="mt-2 max-w-4xl text-sm lg:mt-4 lg:text-base">
            At Cred wap, we’re transforming how people experience credit card
            benefits. We empower individuals by enabling them to share and
            access perks seamlessly, creating a world where financial
            opportunities are open to everyone.
          </p>
          <button className="mt-4 rounded-md bg-background px-4 py-2 text-base font-bold uppercase text-white shadow-lg shadow-primary ring-1 ring-primary transition duration-300 ease-in-out hover:bg-primary hover:shadow-xl focus:outline-none focus:ring-4 lg:mt-4">
            Discover More About CredSwap
          </button>
        </article>
      </section>
    </section>
  )
}
