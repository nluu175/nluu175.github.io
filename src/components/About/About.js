import React from "react";
import { stackList } from "../../data/StackList";
import {
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
const About = () => {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hi! Welcome to my personal website!
            </ScrollAnimation>

            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              My name is <strong>Minh Luu</strong>. I'm an international student
              from Vietnam and I have been living in Canada for the last 5
              years. Recently, I have graduated from the{" "}
              <strong>University of Alberta</strong> with a major in{" "}
              <strong>Computer Science</strong>. During my time here, I have
              gained valuable experience as a Software Developer through various
              internships and projects with many different people.
            </ScrollAnimation>

            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              My venture into the realm of programming was sparked by a deep
              passion for mathematics and a fascination with video games. I can
              still vividly recall the momentous day when I first delved into
              the world of <strong>Megaman</strong> on the computer my parents
              purchased 15 years ago. Since that defining moment, I've remained
              deeply immersed in gaming and harbored an insatiable curiosity for
              the expansive realm of technology.
            </ScrollAnimation>

            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              My journey has been a chllenging yet rewarding path. Despite its
              hurdles, I remained determined tand forged lasting friendships
              that supported me throughout this demanding program. Throughout my
              academic adventure at the esteemed{" "}
              <strong>University of Alberta</strong>, I engaged in interesting
              projects and formed numerous bonds with friends who shared my
              passion and interests.
            </ScrollAnimation>

            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              Working collaboratively within a team towards a shared objective
              has been an incredibly rewarding and unique experience for me. I
              am eager to continue exploring exciting projects in the future,
              with a particular interest in{" "}
              <strong>Software Development</strong>.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
};

export default About;
