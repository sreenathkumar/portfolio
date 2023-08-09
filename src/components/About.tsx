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
                  Greetings! I'm Sreenath Kumar, a dedicated B.Sc. Mathematics student at BSMRSTU and a passionate Frontend Developer. My expertise lies in crafting captivating user interfaces and seamless experiences using JavaScript, React.js, Tailwind CSS, and TypeScript.
               </p>
               <p>With a strong foundation in mathematics and a flair for coding, I'm committed to creating visually appealing and functional websites. My journey involves continuous exploration of new frontend technologies, ensuring I stay at the forefront of web development trends.
               </p>
               <p>
                  While my primary focus is frontend development, I also possess extra expertise in WordPress, allowing me to create dynamic and customizable websites that marry design with functionality.
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
