
import { FeaturedProjectType } from '../FeaturedProjects'


export default function SingleFeaturedProject({ project, index }: { project: FeaturedProjectType, index: number }) {
   return (
      <div className={`project_item grid_${(index + 1) % 2 === 0 ? 'even' : 'odd'} relative mb-8 md:mb-10 rounded-lg grid grid-cols-12`}>
         <div className="project_image w-full h-full col-span-full row-span-full">
            <span className="overlay"></span>
            <a className="h-full md:h-auto md:relative" href={'project.link'} target="_blank" rel="noreferrer" >
               <img src={project.image} className="h-full w-full rounded-lg" alt={'project.title'} />
            </a>
         </div>
         <div className="project_texts h-full p-6 col-span-full row-span-full md:relative md:h-auto md:p-0">
            <p className="project_subtitle font-medium">{project.subtitle}</p>
            <h2 className="project_title">{project.title}</h2>
            <p className="project_des">
               {project.description}
            </p>
            <div className="tags_icon flex justify-between items-center flex-wrap mt-auto md:pt-10">
               <div className="icons">
                  <a href={project.link} target="_blank" rel="noreferrer">
                     <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 19.207 19.207"
                        className="link_icon fill-none stroke-1">
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
               <div className="tags">
                  {
                     project.tags.map((tag, index) => (
                        <span key={index}>{tag}</span>
                     ))
                  }
               </div>
            </div>
         </div>
      </div>
   )
}
