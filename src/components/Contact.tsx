import '../assets/css/contact.css'
import AnimatedButton from './ui/AnimatedButton'

export default function Contact() {
   return (
      <div className='px-6 mb-28 md:mb-32 md:px-20' id="contact">
         <div className="flex flex-col justify-center items-center">
            <p className="sub_title mb-4">Wanna Have a conversation?</p>
            <h2 className='mb-5'>Get in Touch</h2>
            <p className='mb-10'>
               If you are interested to work with me you can talk with in Fiverr freelancing marketplace. Here I provide
               provide quality
               services on WordPress and Woocommerce. If you have any suggestion or opinion you are welcome. Just visit my
               Fiverr profile and
               have a look at my Gigs. If you like my gigs give a thumbsup.
            </p>
            <AnimatedButton link='https://www.fiverr.com/sreenath_kumar' text='Say Hi!!' />
         </div>
      </div>
   )
}
