import '../assets/css/featured-project.css'
import SingleFeaturedProject from "./ui/SingleFeaturedProject";

export interface FeaturedProjectType {
   title: string;
   subtitle: string;
   description: string;
   tags: string[];
   image: string;
   source: string;
   link: string;
}
const featuredProjects: FeaturedProjectType[] = [
   {
      title: 'CoolMonkey',
      subtitle: 'Featured Project',
      description: 'Introducing "Cool Monkey," an innovative and captivating online clothing store designed and developed to redefine your fashion experience. With an exquisite collection of high-quality apparel, the platform offers a unique blend of style and individuality.The website\'s sleek and modern interface ensures a seamless shopping experience.',
      tags: ['WordPress', 'Woocommerce', 'Elementor Pro', 'Shop'],
      image: require("../assets/images/coolmonkey.webp"),
      link: 'https://coolmonkey.net/',
      source: '',
   },
   {
      title: 'S Thomas Thompson',
      subtitle: 'Featured Project',
      description: '"S Thomas Thompson", the official website of the talented book author, S. Thomas Thompson. Delve into the captivating world of literature as you explore a treasure trove of engaging stories and compelling narratives that have won the hearts of readers worldwide. Author of the Augustine Boyle detective fiction series, the Angelica Boyle cozy mystery books, audiobook producer, ghostwriter and copywriter.',
      tags: ['Portfolio', 'Book Author', 'WordPress', 'Elementor Pro'],
      image: require("../assets/images/thompson.webp"),
      link: 'https://sthomasthompsonauthor.com/',
      source: '',
   },
   {
      title: 'Ankh ‘J’ Lani Apparel',
      subtitle: 'Fetaured Project',
      description: 'Ankh ‘J’ Lani Apparel, where athletic and casual designer clothing is infused with the power to inspire hope. The brand is inspired by a visionary community activist, driven by hope, inspiration, and integrity. Join them in spreading positivity and making a difference with each stylish garment you wear. Together, we inspire hope in all people.',
      tags: ['WordPress', 'Woocommerce', 'Elementor Pro', 'Apparel Shop'],
      image: require("../assets/images/ankhjali.webp"),
      link: 'https://ankhjlani.com/',
      source: '',
   }];


export default function FeaturedProjects() {

   return (

      <div className='container px-6 mb-28 mx-auto md:px-20' id="featured">
         <div className="textandline flex mb-10 items-center">
            <h3>Client's Projects</h3>
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
