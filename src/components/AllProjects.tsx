import { FeaturedProjectType } from './FeaturedProjects'
import SingleProject from './ui/SingleProject';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import AnimatedButton from './ui/AnimatedButton';
import React from 'react';

export default function AllProjects() {
   const projects: FeaturedProjectType[] = [
      {
         title: 'Books of the weeek',
         description: 'An api based web app built with React. This app shows you the best selling books of the week. You can also search for any book you want. Which shows you the book details and the link to buy the book.',
         source: 'https://github.com/sreenathkumar/react-library',
         image: '',
         subtitle: '',
         tags: ['React', 'API', 'JavaScript'],
         link: 'https://react-library-by-sreenath-kumar.netlify.app/'
      },
      {
         title: 'Auto login system',
         description: 'A web Scraper built with Python. Basically this is a automatic login robot which login using your given login information and do some click/instructed task.',
         source: 'https://github.com/Sreenath-Kumar/python_auto_login',
         image: '',
         subtitle: '',
         tags: ['Selenuim', 'Python', 'Web Scraper'],
         link: ''
      },
      {
         title: 'Web based drum kit',
         description: 'A web based drum kit built with HTML CSS and JavaScripts. You can play drum with your keyboard or mouse click. This is a fun project to play with. I hope you will enjoy it.',
         source: 'https://github.com/sreenathkumar/drumset',
         image: '',
         subtitle: '',
         tags: ['HTML', 'CSS', 'JavaScript'],
         link: 'https://sreenathkumar.github.io/drumset/'
      },
      {
         title: 'Simon game',
         description: 'A web based Simon Game built with HTML CSS and JavaScripts. This is a fun project to play with. I hope you will enjoy it.',
         source: 'https://github.com/sreenathkumar/Simon-Game',
         image: '',
         subtitle: '',
         tags: ["HTML", "CSS", "JavaScript", "Game"],
         link: 'https://sreenathkumar.github.io/Simon-Game/'
      },
   ];
   return (
      <div className='flex flex-col justify-center px-6 mb-28 md:mb-32 md:px-20' id="projects">
         <div className="textandline flex flex-col justify-center items-center mb-10">
            <h3>Some Actually Working Projects</h3>
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
         <AnimatedButton link='https://github.com/sreenathkumar' text='See All' />
      </div>
   )
}
