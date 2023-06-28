import { FeaturedProjectType } from './FeaturedProjects'
import SingleProject from './ui/SingleProject';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import AnimatedButton from './ui/AnimatedButton';

export default function AllProjects() {
   const projects: FeaturedProjectType[] = [
      {
         title: 'Auto Login System',
         description: 'A web Scraper built with Python. Basically this is a automatic login robot which login using your given login information and do some click/instructed task.',
         link: 'https://github.com/Sreenath-Kumar/python_auto_login',
         image: '',
         subtitle: '',
         tags: []
      },
      {
         title: 'Web Based Drum Kit',
         description: 'A web based drum kit built with HTML CSS and JavaScripts. You can play drum with your keyboard or mouse click. This is a fun project to play with. I hope you will enjoy it.',
         link: 'https://sreenath-kumar.github.io/drumset/',
         image: '',
         subtitle: '',
         tags: []
      },
      {
         title: 'Simon Game',
         description: 'A web based Simon Game built with HTML CSS and JavaScripts. This is a fun project to play with. I hope you will enjoy it.',
         link: 'https://sreenath-kumar.github.io/Simon-Game/',
         image: '',
         subtitle: '',
         tags: []
      },
   ];
   return (
      <div className='flex flex-col justify-center px-6 mb-28 md:mb-32 md:px-20' id="projects">
         <div className="textandline flex flex-col justify-center items-center mb-10">
            <h3>Some Other Projects</h3>
            <p className='text-base'>It's fun to explore</p>
         </div>

         {window.innerWidth < 1000 ?
            <Swiper className='mb-10' pagination={{
               dynamicBullets: true,
            }}
               modules={[Pagination]}>
               {projects.map((project, index) => (
                  <SwiperSlide key={`project-${index}`}><SingleProject project={project} /></SwiperSlide>
               ))}
            </Swiper>
            : <div className="fproject_container flex flex-wrap justify-center gap-6 my-10 ">
               {projects.map((project, index) => (
                  <SingleProject key={`project-${index}`} project={project} />
               ))}
            </div>

         }
         <AnimatedButton link='' text='See All' />
      </div>
   )
}
