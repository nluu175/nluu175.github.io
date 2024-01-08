import React from "react";
import { ExperienceList } from "../../../data/ExperienceList";
import { Card, CardLeft, CardRight } from "./ExperienceCardElements";
import ScrollAnimation from "react-animate-on-scroll";

const ExperienceCard = () => {
  return (
    <>
      {ExperienceList.map((experience, index) => (
        <ScrollAnimation animateIn="fadeInLeft" key={index}>
          <Card>
            <CardLeft>
              <h1>{experience.company}</h1>
              <h4>{experience.duration}</h4>
            </CardLeft>
            <CardRight>
              <h4>{experience.title}</h4>
              <p>{experience.description}</p>
            </CardRight>
          </Card>
        </ScrollAnimation>
      ))}
    </>
  );
};

export default ExperienceCard;
