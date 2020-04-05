import React from 'react';
import Title from '@components/title';
import {
  AboutCSS,
  AboutFlexContainerCSS,
  AboutDetailCSS,
  AboutImageCSS,
} from './styles';

const About = () => {
  const tech = ['Javascript', 'Typescript', 'Python', 'React', 'Node', 'Firebase', 'Flask', 'Docker'].join(' - ');

  return (
    <AboutCSS id="about">
      <Title title="About" color="blue" />
      <AboutFlexContainerCSS>
        <AboutImageCSS>
          <img src="https://source.unsplash.com/user/erondu/1600x900" alt="about" />
          <div id="image-decorator" />
        </AboutImageCSS>
        <AboutDetailCSS>
          <p>
            Hello! I’m Wingman, a New Yorker currently based in Hong Kong as a software engineer. I design and develop high quality web applications with the user experience as a priority as well as efficient and modern backends.
          </p>
          <p>
            Shortly after graduating SUNY Oneonta with a BS in Computer Art, I decided to take my engineering journey to the next level by Attending the Grace Hopper Program, a software engineering bootcamp that specialised in React, PostgresSQL, Express, and Node.
          </p>
          <p>
            I am currently on the engineering team at Uprise Credit where I work on a variety of up and coming projects using different technologies.
          </p>
          <p>
            Some Technologies I’ve been working with recently:
          </p>
          <p>
            {tech}
          </p>
        </AboutDetailCSS>
      </AboutFlexContainerCSS>
    </AboutCSS>
  );
};

export default About;
