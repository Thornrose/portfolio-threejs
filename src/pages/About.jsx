import { VerticalTimeline, VerticalTimelineElement }  from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


import { skills, experiences } from "../constants"
import CallToAction from "../components/CTA";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I&#39;m <span className="blue-gradient_text font-semibold drop-shadow">Cheever</span>.
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
        I am an enthusiastic and detail-oriented web developer based in Nova Scotia, Canada. With strong foundations in JavaScript and Ruby, I bring hands-on experience with prominent frameworks such as React, Node.js, and Ruby on Rails. Proficient in database management using SQL and experienced in version control with Git. Committed to delivering clean, efficient code, I leverage testing tools like Mocha, Chai, Jest, and Cypress to ensure robust functionality. Prior experience in Customer Service and Support has honed my communication skills and instilled a user-focused approach to problem-solving. I am ready to contribute technical expertise and creativity to a dynamic web development team.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill, index) => (
            <div className="block-container w-20 h-20" key={index}>
              < div className="btn-back rounded-xl"/>
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img 
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Here&#39;s a summary of where I&#39;ve been so far:
          </p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement 
                key={index} 
                date={experience.date} 
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none"
                }
                }
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p className="text-black-500 font-medium font-base" style={{margin:0}}>
                    {experience.company_name}
                  </p>
                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, pointIndex) => (
                      <li  className="text-black-500/50 font-normal pl-1 text-sm" key={pointIndex}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200"/>
      <CallToAction />
    </section>
  )
}

export default About;