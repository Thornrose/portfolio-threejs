import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="cta">
     <p className="cta-text">
      Let&#39;s build something great together - <br className="sm:block hidden"/>
      Get in touch with me!
    </p>
    <Link to="/contact" className="btn">Contact</Link>
    </section>
  )
}

export default CallToAction;