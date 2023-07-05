import '../assets/css/featured-project.css'
import SingleFeaturedProject from "./ui/SingleFeaturedProject";

export interface FeaturedProjectType {
   title: string;
   subtitle: string;
   description: string;
   tags: string[];
   image: string;
   link: string;
}
const featuredProjects: FeaturedProjectType[] = [
   {
      title: 'Interior Design Agency',
      subtitle: 'Featured Project',
      description: 'This page is an Agency website homepage. Their work is to design the furniture and other object appearel inside any type of room. The decorate Office, Bed Room, Conferrence Room, Dianing Room etc.',
      tags: ['Web Design', 'Adobe XD', 'WordPress'],
      image: require("../assets/images/Interier_Design.webp"),
      link: 'https://www.behance.net/gallery/84829905/Real-State-website-design'
   },
   {
      title: 'PhoneDoctor (Mobile Shop)',
      subtitle: 'Featured Project',
      description: 'PhoneDoctor is a mobile repair shop. They repairs all kinds of smartphone i.e Android and iphone. They also sell smartphones replacement parts and component. Their speciality is in iphone.',
      tags: ['Web Design', 'Adobe XD', 'WordPress'],
      image: require("../assets/images/Mobile_Repair.webp"),
      link: 'https://www.behance.net/gallery/114885501/Mobile-Repair-Shop'
   },
   {
      title: 'Yoga Music',
      subtitle: 'Fetaured Project',
      description: 'Yoga Music is built for the collection of Music which can be use during yoga or gym. It\'s an online music player website with various types of songs and musics. There is an option to download the musics.',
      tags: ['Web Design', 'Adobe XD', 'WordPress'],
      image: require("../assets/images/Yoga_Music.webp"),
      link: 'https://www.behance.net/gallery/95344643/Music-for-Yoga'
   }];


export default function FeaturedProjects() {

   return (

      <div className='container px-6 mb-28 mx-auto md:px-20' id="featured">
         <div className="textandline flex mb-10 items-center">
            <h3>Some Designs</h3>
            <div className="hl"></div>
         </div>
         <div className="fproject_container md:flex md:flex-col">
            {
               featuredProjects.map((project, index) => (<SingleFeaturedProject key={`featured-item-${index}`} project={project} index={index} />))
            }
         </div>
      </div>
   )
}
