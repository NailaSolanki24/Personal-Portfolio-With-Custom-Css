import Image from "next/image"


export default function Home(){
    return(
      <main className="intro">
        <div className="intro-img">
          <Image 
          src="/images/2024-02-13-02-09-13-384.jpg"
          alt="pic"
          height={300}
          width={300}
          />
        </div>
        <div className="intro-text">
          <h1 className="intro-h">I Am Naila Solanki</h1>
          <p className="intro-p"> Welcome to my portfolio! I&apos;m Naila, a dedicated professional on a journey of continuous growth 
          and exploration in the world of technology.!</p>
          <button className="btn">Hire me</button>
        </div>
      </main>
    )
}