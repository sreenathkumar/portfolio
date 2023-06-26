import '../assets/css/hero.css'
import AnimatedButton from './ui/AnimatedButton'

export default function Hero() {
   return (
      <div className="hero text-center my-28 md:mb-32 px-6 md:px-0" id="hero">
         <span className="greeting block mb-4 font-normal">Hello, I am</span>
         <h1 className="name font-extrabold font-sans mb-4">Sreenath Kumar</h1>
         <h2 className="Slogan mb-6 font-extrabold">I make Web Beautiful.</h2>
         <p className='px-6 mb-10 md:px-0 md:pr-4 md:max-w-3xl'>
            I am a Frontend website developer. I specialize in creating visually appealing, user-friendly websites that are optimized for performance and search engines. Whether you need a new website or assistance with customization, I'm here to deliver outstanding results. Let's collaborate and bring your online presence to life!
         </p>
         <AnimatedButton link='https://www.fiverr.com/sreenath_kumar' text='Get In Touch' />
      </div>
   )
}
