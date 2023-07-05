import '../../assets/css/single-project.css'
import { FeaturedProjectType } from '../FeaturedProjects'

export default function SingleProject({ project }: { project: FeaturedProjectType }) {
   return (
      <div className="item h-full md:h-auto">
         <div className="card max-w-xs flex flex-col h-full p-8 m-auto rounded-lg">
            <div className="card_icon flex justify-between items-center mb-8">
               <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 31 28"
                  className="folder_icon">
                  <path d="M33,28.5a3,3,0,0,1-3,3H6a3,3,0,0,1-3-3V7.5a3,3,0,0,1,3-3h7.5l3,4.5H30a3,3,0,0,1,3,3Z"
                     transform="translate(-2.5 -4)" />
               </svg>
               <a href={project.link} rel='noreferrer' target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 19.207 19.207"
                     className="link_icon">
                     <g transform="translate(0.5 0.707)">
                        <path
                           d="M18.75,13.542v6.25a2.083,2.083,0,0,1-2.083,2.083H5.208a2.083,2.083,0,0,1-2.083-2.083V8.333A2.083,2.083,0,0,1,5.208,6.25h6.25"
                           transform="translate(-3.125 -3.875)" />
                        <path d="M15.625,3.125h6.25v6.25" transform="translate(-3.875 -3.125)" />
                        <path d="M10.417,14.583,21.875,3.125" transform="translate(-3.875 -3.125)" />
                     </g>
                  </svg>
               </a>
            </div>
            <div className="texts">
               <h3 className="card_title mb-4">{project.title}</h3>
               <p className="card_description">
                  {project.description}
               </p>
            </div>
         </div>
      </div>
   )
}
