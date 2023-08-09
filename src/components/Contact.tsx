import '../assets/css/contact.css'
import AnimatedButton from './ui/AnimatedButton'

export default function Contact() {
   return (
      <div className='px-6 mb-28 md:mb-32 md:px-20' id="contact">
         <div className="flex flex-col justify-center items-center">
            <p className="sub_title mb-4">Wanna Have a conversation?</p>
            <h2 className='mb-5'>Get in Touch</h2>
            <p className='mb-10'>
            Ready to bring your ideas to life? Let's collaborate and create something exceptional together. Whether you need a captivating website, an engaging user interface, or a seamless user experience, I'm here to make it happen. Reach out today and let's start building!
            </p>
            <AnimatedButton link='https://www.fiverr.com/sreenath_kumar' text='Send a ❤' />
         </div>
      </div>
   )
}
