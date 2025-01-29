import Image from 'next/image'

export default function Section4() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-4 p-2 py-8">
      <article className="grid gap-4 lg:grid-cols-[20%_30%_30%_20%]">
        <div className="lg:col-span-2">
          <Image
            data-aos="fade-right"
            data-aos-duration="300"
            data-aos-offset="-100"
            src="/assets/Section4/row1left.png"
            alt="Section 4"
            width={1000}
            height={1000}
          />
        </div>
        <div className="lg:col-span-2">
          <Image
            data-aos="fade-left"
            data-aos-duration="300"
            data-aos-offset="-100"
            src="/assets/Section4/row1right.png"
            alt="Section 4"
            width={1000}
            height={1000}
          />
        </div>
      </article>
      <article className="grid grid-cols-2 gap-4 lg:grid-cols-[20%_30%_30%_20%]">
        <div className="lg:col-span-1">
          <Image
            data-aos="fade-right"
            data-aos-duration="300"
            data-aos-offset="-100"
            src="/assets/Section4/row2left.png"
            alt="Section 4"
            width={1000}
            height={1000}
          />
        </div>
        <div className="lg:col-span-1 lg:hidden">
          <Image
            data-aos="fade-left"
            data-aos-duration="300"
            data-aos-offset="-100"
            src="/assets/Section4/row2right.png"
            alt="Section 4"
            width={1000}
            height={1000}
          />
        </div>
        <div className="group relative col-span-2 flex flex-col items-center justify-between overflow-hidden rounded-xl bg-primary text-center transition-all hover:bg-white">
          <h1 className="mx-auto -mt-2 pb-32 font-brilliant text-5xl font-extrabold uppercase transition-colors group-hover:text-primary lg:-mt-4 lg:text-8xl">
            Earn With Your Card
          </h1>
          <Image
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-offset="-100"
            src="/assets/Section4/cards.png"
            alt="Section 4"
            width={1000}
            height={1000}
            className="absolute -bottom-10 right-0 scale-90 transition-transform group-hover:scale-150"
          />
        </div>
        <div className="hidden lg:col-span-1 lg:block">
          <Image
            data-aos="fade-left"
            data-aos-duration="300"
            data-aos-offset="-100"
            src="/assets/Section4/row2right.png"
            alt="Section 4"
            width={1000}
            height={1000}
          />
        </div>
      </article>
      <article className="grid gap-4 lg:grid-cols-[20%_30%_30%_20%]">
        <div className="lg:col-span-2">
          <Image
            data-aos="fade-right"
            data-aos-duration="300"
            data-aos-offset="-100"
            src="/assets/Section4/row3left.png"
            alt="Section 4"
            width={1000}
            height={1000}
          />
        </div>
        <div className="lg:col-span-2">
          <Image
            data-aos="fade-left"
            data-aos-duration="300"
            data-aos-offset="-100"
            src="/assets/Section4/row3right.png"
            alt="Section 4"
            width={1000}
            height={1000}
          />
        </div>
      </article>
    </section>
  )
}
