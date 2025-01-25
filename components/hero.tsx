import Image from 'next/image'
import { Hanken_Grotesk } from 'next/font/google'
import { cn } from '@/lib/utils'
const grotesk = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '700', '800', '900'],
})

export default function Hero() {
  return (
    <>
      <nav className="flex w-full flex-row items-center justify-between px-2 md:p-8">
        <Image
          src="/assets/Generic/logo.png"
          width={200}
          height={200}
          alt="logo"
          className="w-16"
        />
        <Image
          src="/assets/Generic/textlogo.png"
          width={200}
          height={200}
          alt="logo"
          className="h-16"
        />
      </nav>
      <Image
        src="/assets/Section1/section1bg.png"
        width={2000}
        height={2000}
        alt="logo"
        className="absolute -z-30 hidden h-screen w-screen sm:block"
      />
      <section className="flex w-screen flex-col-reverse items-center justify-between gap-4 md:gap-8 lg:flex-row lg:items-start lg:py-4">
        <div className="p-4 text-center uppercase sm:text-start lg:p-16">
          <h1 className="font-brilliant text-3xl font-bold sm:text-5xl lg:text-7xl lg:font-extrabold">
            Kyun Badhaye <br className="hidden lg:block" /> Kandhey Par Boj
          </h1>
          <h2 className="text-md mt-2 font-brilliant font-semibold sm:text-2xl lg:mt-4 lg:text-3xl">
            Jab Kar Sakte Hai Bina{' '}
            <span className="text-primary">Credit Card</span> <br /> Ke Maximum
            Discount Ki Khoj
          </h2>
          <p
            className={cn(
              'mt-4 text-sm lg:mt-6 lg:text-base',
              grotesk.className,
            )}
          >
            Unlock exclusive discounts, rewards, and premium perks without
            owning a credit card. <br className="hidden lg:block" />
            CredSwap connects you to smarter financial possibilities
          </p>
          <button className="mt-4 rounded-md bg-background px-4 py-2 text-base font-bold uppercase text-white shadow-lg shadow-primary ring-1 ring-primary transition duration-300 ease-in-out hover:bg-primary hover:shadow-xl focus:outline-none focus:ring-4 lg:mt-4">
            Launching Soon
          </button>
        </div>
        <Image
          src="/assets/Section1/mockup.svg"
          width={2000}
          height={2000}
          alt="logo"
          className="-z-20 w-96 lg:w-[500px] 2xl:w-[768px]"
          style={{
            filter: 'drop-shadow(0 0 16px rgba(255, 255, 255, 0.50))',
          }}
        />
      </section>
    </>
  )
}
