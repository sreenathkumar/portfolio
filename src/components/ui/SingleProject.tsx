import '../../assets/css/single-project.css'
import { FeaturedProjectType } from '../FeaturedProjects'

export default function SingleProject({ project }: { project: FeaturedProjectType }) {

   return (
      <div className="item">
         <div className="card max-w-xs flex flex-col h-full p-8 m-auto rounded-lg">
            <div className="card_icon flex justify-between items-center mb-6">
               <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 31 28"
                  className="folder_icon">
                  <path d="M33,28.5a3,3,0,0,1-3,3H6a3,3,0,0,1-3-3V7.5a3,3,0,0,1,3-3h7.5l3,4.5H30a3,3,0,0,1,3,3Z"
                     transform="translate(-2.5 -4)" />
               </svg>
               <div className='flex gap-2 items-center'>
                  {
                     project.link &&
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
                  }
                  {
                     project.source &&
                     <a href={project.source} rel='noreferrer' target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" className='link_icon ml-2' width="28" height="27" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" /></svg>
                     </a>
                  }
               </div>

            </div>
            <div className="texts">
               <h3 className="card_title mb-2">{project.title}</h3>
               <p className="card_description mb-6">
                  {project.description}
               </p>
            </div>
            <div className='flex gap-4 items-center mt-auto'>
               {project.tags.map((tag, index) => <span key={index} className="project-tag">{tag}</span>)}
            </div>
         </div>
      </div>
   )
}
