import React from 'react';
import {
  LinkedInIcon,
  GithubIcon,
  ExternalIcon,
} from '@src/components/Icons';
import {
  SingleProjectCSS,
  SingleProjectBackgroundCSS,
  SingleProjectTitleCSS,
  SingleProjectAboutCSS,
  SingleProjectDetailContainerCSS,
  SingleProjectSocialCSS,
} from './styles';


const SingleProject = (props) => {
  const {
    data,
    featured = false,
    isOdd = false,
  } = props;

  const {
    title = '',
    about = '',
    background = 'https://source.unsplash.com/user/erondu/1600x900',
    links = [],
    skills = [],
  } = data;
  const skillsUsed = skills.join(' - ');

  const renderIcon = (type) => {
    switch (type) {
      case 'github': {
        return <GithubIcon />;
      }
      case 'linkedIn': {
        return <LinkedInIcon />;
      }
      case 'external': {
        return <ExternalIcon />;
      }
      default:
        return null;
    }
  };

  return (
    <SingleProjectCSS featured={featured} isOdd={isOdd}>
      <SingleProjectBackgroundCSS
        background={background}
        featured={featured}
        isOdd={isOdd}
      />
      <SingleProjectDetailContainerCSS
        featured={featured}
        isOdd={isOdd}
      >
        <SingleProjectTitleCSS
          featured={featured}
          isOdd={isOdd}
        >
          {title}
        </SingleProjectTitleCSS>
        <SingleProjectAboutCSS
          featured={featured}
          isOdd={isOdd}
        >
          {about}
        </SingleProjectAboutCSS>
        <SingleProjectAboutCSS
          color
          featured={featured}
          isOdd={isOdd}
        >
          {skillsUsed}
        </SingleProjectAboutCSS>
        <SingleProjectSocialCSS
          featured={featured}
          isOdd={isOdd}
        >
          {links.map((link) => {
            const { url, type } = link;
            return (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                {renderIcon(type)}
              </a>
            );
          })}
        </SingleProjectSocialCSS>
      </SingleProjectDetailContainerCSS>
    </SingleProjectCSS>
  );
};

export default SingleProject;
