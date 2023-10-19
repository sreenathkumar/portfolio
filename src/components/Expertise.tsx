import '../assets/css/expertise.css'
import expertiseColumnMaker from '../utils/expertiseColumnMaker';

export default function Expertise() {
  const skillSet: string[] = ['JavaScripts', 'React.js','Node.js', 'Redux.js','TypeScript','Tailwind CSS', 'Python', 'Wordpress', 'Woocommerce', ];
  return (
    <div className="expertise block overflow-hidden px-6 mb-28 md:mb-32 md:max-w-xl " id="expertise">
      <div className="expertise_contents">
        <div className="textandline flex mb-10 md:mb-14 items-center">
          <h3>My Expertise</h3>
          <span className="hl"></span>
        </div>

        <div className="expertise_text_container">
          <p className="expertise_texts">
          I am a dedicated and aspiring learner, committed to continuous improvement. While I am in the process of honing my skills, I have already gained valuable expertise in WordPress, enabling me to create dynamic and customizable websites. Beyond WordPress, I possess a foundational understanding of various coding languages. I am enthusiastic about contributing my evolving skills and knowledge, and I look forward to embracing new challenges and opportunities for growth in my journey ahead.
          </p>
          <span className="vl"></span>
          <div className="skill_list">
            {expertiseColumnMaker(skillSet,3)}
          </div>
        </div>
      </div>
    </div>
  )
}
