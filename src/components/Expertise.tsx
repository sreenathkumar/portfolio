import '../assets/css/expertise.css'
import SkillItem from './ui/SkillItem';

export default function Expertise() {
  const skillSet: string[] = ['Wordpress', 'Woocommerce', 'HTML & CSS', 'Python', 'JavaScripts', 'React',];
  return (
    <div className="expertise block overflow-hidden px-6 mb-28 md:mb-32 md:max-w-xl " id="expertise">
      <div className="expertise_contents">
        <div className="textandline flex mb-10 md:mb-14 items-center">
          <h3>My Expertise</h3>
          <span className="hl"></span>
        </div>

        <div className="expertise_text_container">
          <p className="expertise_texts">
            I am not a complete professional. I am still learning and hope
            continue learning. Within my short learning period I have gained a
            little bit expertise on WordPress. Beside WordPress I have some
            basic knowledge about some coding language.
          </p>
          <span className="vl"></span>
          <div className="skill_list">
            <div>
              {skillSet.slice(0, Math.round(skillSet.length / 2)).map((skill: string, index) => <SkillItem key={`skill-${index}`} title={skill} />)}
            </div>
            <div>
              {skillSet.slice(Math.round(skillSet.length / 2)).map((skill: string, index) => <SkillItem key={`skill-${index}`} title={skill} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
