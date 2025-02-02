import Image from 'next/image'

export default function Footer() {
  return (
    <>
      <article className="mt-4 p-4 px-2">
        <div className="min- relative mx-auto min-h-[400px] w-[90dvw] max-w-[1300px] xl:min-h-[500px]">
          <Image
            src="/assets/Generic/videoplaceholder.png"
            alt="video placeholder"
            width={2000}
            height={2000}
            className="absolute h-full rounded-xl object-cover"
          />
        </div>
        <h1
          data-aos="fade-up"
          data-aos-duration="300"
          data-aos-offset="-500"
          data-aos-delay="50"
          className="mt-1 text-center font-brilliant text-[40px] font-bold uppercase tracking-tighter sm:text-[80px] md:text-[95px] lg:text-[120px] xl:text-[180px]"
        >
          How It <span className="text-primary">Works</span>
        </h1>
      </article>
      <footer className="mt-1 flex flex-col items-center justify-center gap-2 md:gap-6">
        <Image
          src="/assets/Generic/textlogo.png"
          width={200}
          height={200}
          alt="logo"
          className="h-12 w-fit min-w-16"
        />
        <p>Launching On</p>
        <div className="flex flex-row items-center justify-center gap-4">
          <button className="flex flex-row items-end justify-center gap-2 rounded-md bg-secondary px-4 py-2 text-white transition-all hover:invert">
            <Image
              src="/assets/android.svg"
              height={100}
              width={100}
              alt="android logo"
              className="w-8 invert"
            />
            <p>Android</p>
          </button>
          <button className="flex flex-row items-end justify-center gap-2 rounded-md bg-secondary px-4 py-2 text-white transition-all hover:invert">
            <Image
              src="/assets/apple.svg"
              height={100}
              width={100}
              alt="IOS logo"
              className="w-8 invert"
            />
            <p>iOS</p>
          </button>
        </div>
        <p className="mt-2 max-w-xl px-4 text-center text-xs text-white/30">
          Copyright © 1999 - 2025 CredSwap, LLC. All Rights Reserved.
        </p>
      </footer>
    </>
  )
}
