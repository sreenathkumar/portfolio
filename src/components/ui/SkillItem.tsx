
export default function SkillItem({ title }: { title: string }) {
   return (
      <li className="mb-4 flex items-center">
         <svg className="mr-2 stroke-4 rotate-360" xmlns="http://www.w3.org/2000/svg" xmlnsXlink='http://www.w3.org/1999/xlink' aria-hidden="true"
            focusable="false" width="1em" height="1em"
            preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
            <g strokeLinecap="round" strokeLinejoin="round">
               <path d="M9 18l6-6l-6-6" />
            </g>
         </svg>
         <span>{title}</span>
      </li>
   )
}
