import '../assets/css/about.css'
import sreenathImage from '../assets/images/Sreenath_Kumar.webp'
export default function About() {
   return (
      <div className="flex flex-wrap flex-col px-6 mb-28 md:px-0 md:mx-auto md:grid-flow-col" id="about">
         <div className="about_contents md:pr-10 ">
            <div className="textandline flex mb-10 md:mb-14 items-center">
               <h3>About Me</h3>
               <div className="hl"></div>
            </div>
            <div className="about_texts md:max-w-md">
               <p>
                  Hi !! I am Sreenath Kumar. A student and part time WordPress Web
                  Developer. A learner and dreamer for making something great. Love
                  to code, try to learn something new everyday. My goal is to build
                  something great for people that make me different from others.
               </p>
               <p>
                  Currently studying B.Sc. in Mathematics in BSMRSTU. Beside study
                  freelancing as a Web Developer in WordPress platform. Learning
                  different coding technologies and language.
               </p>
               <span className="vl"></span>
            </div>
         </div>
         <div className="photo mt-10 mb-4 mx-auto relative">
            <div className="frame h-72 w-full rounded"></div>
            <img className='h-72 w-full rounded' src={sreenathImage} alt="Sreenth Kumar" />
            <div className="overlay h-72 w-full rounded"></div>
         </div>
      </div>
   )
}
