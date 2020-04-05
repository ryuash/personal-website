import React from 'react';
import Title from '@components/title';
import SingleProject from '@components/singleProject';
import {
  FeatureProjectsCSS,
  FeatureProjectsGridCSS,
  FeatureProjectSingleGridCSS,
} from './styles';
import { projects as data } from './config';

const FeaturedProjects = () => (
  <FeatureProjectsCSS id="projects">
    <Title title="Featured Projects" color="red" />
    <FeatureProjectsGridCSS>
      {data.map((x, i) => {
        const isOdd = !(i % 2);

        return (
          <FeatureProjectSingleGridCSS
            key={i}
            isOdd={isOdd}
          >
            <SingleProject
              data={x}
              featured
              isOdd={isOdd}
            />
          </FeatureProjectSingleGridCSS>
        );
      })}
    </FeatureProjectsGridCSS>
  </FeatureProjectsCSS>
);

export default FeaturedProjects;
