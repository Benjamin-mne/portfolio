import './experience.css'
import { ExperienceDetailsArticle } from './ExperienceDetailsArticle'

export const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <ExperienceDetailsArticle h4={'HTML'} small={'Experienced'} />
            <ExperienceDetailsArticle h4={'CSS'} small={'Intermediate'} />
            <ExperienceDetailsArticle h4={'JavaScript'} small={'Experienced'} />
            <ExperienceDetailsArticle h4={'React'} small={'Experienced'} />
            <ExperienceDetailsArticle h4={'Axios'} small={'Basic'} />
            <ExperienceDetailsArticle h4={'Styled Component'} small={'Basic'} />
            <ExperienceDetailsArticle h4={'Bootstrap'} small={'Experienced'} />
            <ExperienceDetailsArticle h4={'Tailwind'} small={'Basic'} />
          </div>
        </div>
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
          <ExperienceDetailsArticle h4={'NodeJS'} small={'Experienced'} />
          <ExperienceDetailsArticle h4={'MongoDB'} small={'Intermediate'} />
          <ExperienceDetailsArticle h4={'MySQL'} small={'Basic'} />
          <ExperienceDetailsArticle h4={'Express'} small={'Intermediate'} />
          <ExperienceDetailsArticle h4={'Socket.io'} small={'Basic'} />
          <ExperienceDetailsArticle h4={'Firebase'} small={'Basic'} />
          <ExperienceDetailsArticle h4={'Insomnia'} small={'Basic'} />
          <ExperienceDetailsArticle h4={'Postman'} small={'Basic'} />
          </div>
          </div>
      </div>
      
    </section>
  )
}
