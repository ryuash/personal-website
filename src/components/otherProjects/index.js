import React from 'react';
import Title from '@components/title';
import SingleProject from '@components/singleProject';
import { projects } from './config';
import {
  OtherProjectsCSS,
  OtherProjectsGridCSS,
} from './styles';

const OtherProjects = () => (
  <OtherProjectsCSS>
    <Title title="Other Projects" color="darkYellow" />
    <OtherProjectsGridCSS>
      {
          projects.map((project, index) => (
            <SingleProject
              key={index}
              data={project}
            />
          ))
        }
    </OtherProjectsGridCSS>
  </OtherProjectsCSS>
);

export default OtherProjects;
