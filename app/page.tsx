import Image from "next/image";
import { Chela_One, Raleway } from "next/font/google"
import Waffles from "@/public/waffles.svg"
import Waffle from "@/public/waffle.svg"

import Link from "next/link";

const chela = Chela_One({subsets: ['latin'], weight: '400'})
const raleway = Raleway({subsets: ['latin'], weight: '800'})

export default function Home() {
  return (
    <main className="px-5 md:px-20 text-[#D3790D]">
      <header className="py-10 md:flex justify-between place-items-center">
        <div id="logo" className="flex justify-center place-items-center gap-5">
          <Image src={Waffles} width={90} height={90} alt=""></Image>
          <h1 className={`${chela.className} text-6xl font-bold text-[#FFAC33]`}>Waffles</h1>
        </div>
        <div id="nav" className="flex md:justify-normal justify-between md:gap-10 mt-10 md:mt-0 md:text-xl text-[#FFAC33]">
          <Link href="">Home</Link>
          <Link href="">Contact</Link>
          <Link href="">FAQ</Link>
          <Link href="">View on Etherscan</Link>
        </div>
      </header>
      <div className="mt-10 md:mt-32 w-full md:flex justify-between place-items-center grid row-auto">
        <div id="left_content" className="md:w-[50%] text-center md:text-left md:text-left] row-start-2">
          <h1 className={`text-2xl md:text-4xl ${raleway.className} font-bold`}>Welcome to Waffles Coin</h1>
          <p className="text-xl md:text-2xl leading-10 mt-10">Introducing Waffles Coin – the tastiest cryptocurrency on the blockchain. Just like the sweet and crispy waffles you love, our coin is designed to satisfy your financial appetite and bring a touch of joy to your investments.</p>
          <h3 className={`text-xl ${raleway.className} font-bold mt-20 mb-10`}>Subscribe to be notified when we launch!</h3>
          <form action="https://formspree.io/f/xwkdyjpw" method="POST">
            <input type="text" name="email" className="bg-[#FFDA86] w-[90%] md:w-[400px] max-w-[400px] opacity-60 rounded-xl border-2 border-[#FFAC33] outline-none px-10 py-3 text-xl placeholder:text-[inherit]" placeholder="example@email.com"/>
            <button type="submit" className="bg-[#FFD983] text-[1.25em] font-semibold px-5 py-3 rounded-lg ml-5 mt-8 md:mt-0">Subscribe</button>
          </form>
        </div>
        <div id="right_content" className="md:py-0 row-start-1">
          <Image src={Waffle} alt="" className="w-[50%] m-auto mb-10 md:m-0 md:w-full aspect-auto"></Image>
        </div>
      </div>
      <div id="numbers" className="md:flex md:justify-between md:mt-32 py-5">
        <div className="text-xl font-bold flex gap-10 md:justify-center place-items-center mt-10">
          <div className="bg-[#FFD983] py-5 px-8 rounded-3xl text-4xl">1</div>
          <div>Scrumptious Returns</div>
        </div>
        <div className="text-xl font-bold flex gap-10 md:justify-center place-items-center mt-10">
          <div className="bg-[#FFD983] py-5 px-8 rounded-3xl text-4xl">2</div>
          <div>Community-Driven</div>
        </div>
        <div className="text-xl font-bold flex gap-10 md:justify-center place-items-center mt-10">
          <div className="bg-[#FFD983] py-5 px-8 rounded-3xl text-4xl">3</div>
          <div>Mouthwatering Roadmap</div>
        </div>
      </div>
    </main>
  )
}
