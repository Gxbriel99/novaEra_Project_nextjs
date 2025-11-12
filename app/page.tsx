import Image from "next/image";
import "./globals.css";
import HomeForm  from "./ui/homepageForm";

export default function Home() {
  return (
    <main className=" flex h-auto items-center justify-center flex-col font-sans ">
      <div className="pentagon w-full h-screen relative ">
        <div className=" absolute w-full h-full bg-indigo-900/50 flex items-center justify-center flex-col">
          <h1 className="text-5xl uppercase -mt-20 tracking-widest md:text-8xl lg:text-6xl">
            Outdoors
          </h1>
          <p className="text-sm text-center uppercase tracking-[10px] md:text-3xl lg:text-xl">
            is where life happens
          </p>
          <button
            className="
            border flex items-center justify-center mt-3 py-2 text-lg rounded-3xl md:rounded-5xl
            md:text-4xl md:py-5 md:px-7 md:font-light w-40 md:w-100 lg:text-xl lg:p-2 lg:w-75
          hover:bg-[#1b1b1b]/70 hover:border-[#1b1b1b]/10 transition-all">
            Start the journey
          </button>
        </div>
        <Image
          src="/paesaggio3.jpg"
          width={1000}
          height={1000}
          loading="eager"
          alt="Sample Image"
          className="w-full h-full object-cover  "
        />
      </div>
      <section className="w-full h-auto  flex flex-col items-center justify-center">
        <h1 className="h-1/6 w-full flex items-center justify-center text-center text-2xl font-medium p-5 sm:text-3xl md:text-6xl lg:text-4xl md:font-semibold">
          Exciting tours for adventurous people
        </h1>
        <div className=" w-full h-5/6 flex items-center justify-center flex-col lg:flex-row">
          <div className=" w-full h-full flex flex-col items-center justify-center gap-4 text-start px-3 py-8 ">
            <h3 className="w-full text-md md:text-4xl lg:text-2xl font-semibold uppercase  text-gray-400">
              You're to fall in love with nature
            </h3>
            <p className=" md:text-xl lg:text-base text-gray-300">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum ad,
              architecto dolores impedit, molestias beatae in facere, unde ullam
              tempore nobis commodi at. Odio deserunt placeat, eum dolor
              accusamus ipsa.
            </p>
            <h3 className="w-full text-md md:text-4xl lg:text-2xl font-semibold uppercase text-gray-400">
              Live adventures like you never have before
            </h3>
            <p className=" md:text-xl lg:text-base text-gray-300">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
              maiores saepe tempora cupiditate ipsam velit possimus nihil atque,
              molestiae autem laborum illo, magnam sapiente. Repudiandae
              repellat aut quo deleniti veritatis.
            </p>
          </div>
          <div className="w-full h-100 lg:flex items-center justify-center relative overflow-hidden hidden">
            <Image
              src="/paesaggio1.jpg"
              width={500}
              height={500}
              loading="lazy"
              alt="Sample Image"
              className=" w-70 h-50 object-cover absolute left-12 top-7 z-0 hover:z-3 hover:border-8 hover:border-solid hover:border-indigo-600 hover:p-3 transition-all"
            />
            <Image
              src="/paesaggio2.jpg"
              width={500}
              height={500}
              loading="lazy"
              alt="Sample Image"
              className=" border w-70 h-50 object-cover absolute right-10 top-20 z-1 hover:z-3 hover:border-8 hover:border-solid hover:border-indigo-600 hover:p-3 transition-all"
            />
            <Image
              src="/paesaggio3.jpg"
              width={500}
              height={500}
              loading="lazy"
              alt="Sample Image"
              className=" border w-70 h-50 object-cover absolute left-25 top-45 z-2 hover:z-3 hover:border-8 hover:border-solid hover:border-indigo-600 hover:p-3 transition-all "
            />
          </div>
        </div>
      </section>
      <section className=" w-full h-screen relative">
        <Image
          src="/paesaggio1.jpg"
          width={1000}
          height={1000}
          loading="lazy"
          alt="Sample Image"
          className="w-full h-full object-cover absolute z-0"
        />
        <div className="pentagon2 w-full h-full absolute z-1 bg-white/50 flex flex-col items-start justify-center">
        </div>
        <div className="w-full h-full absolute z-2 bg-indigo-900/50 pentagon3"></div>
        
        <HomeForm/>
      </section>
    </main>
  );
}
