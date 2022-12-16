import CV from '../../img/benjamin-delgado-543446-400156.png';

export const Cta = () => {
  return (
    <div className="cta">
        <a href={CV} download className="btn" name='Benjamín Delgado'>Download CV</a>
        <a href="#contact" className="btn btn-primary" >Let's Talk</a>
    </div>
  )
}
