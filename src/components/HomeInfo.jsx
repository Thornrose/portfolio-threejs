import { Link } from "react-router-dom";

import { arrow } from "../assets/icons"

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
   <p className="font-medium sm:text-xl text-center">{text}</p>
   <Link to={link} className="neo-brutalism-white neo-btn">
    {btnText}
    <img src={arrow} className="w-4 h-4 object-contain"/>
   </Link>
  </div>
 )

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hello, my name is <span className="font-semibold">Cheever</span> (Ames is fine too).<br /> 
      Welcome to my portfolio!
    </h1>
  ),
  2: (
    <InfoBox 
      text="I have been pursuing a career in web development since January 2022."
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox 
      text="Here are a couple projects I've worked on so far."
      link="/projects"
      btnText="See Projects"
    />
  ),
  4: (
    <InfoBox 
      text="Let's build something great together!"
      link="/contact"
      btnText="Contact Me"
    />
  )

}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo;