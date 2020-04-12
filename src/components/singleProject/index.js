import React, { useState } from 'react';
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
  FlexEndCSS,
} from './styles';


const SingleProject = (props) => {
  const [hover, setHover] = useState(false);
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

  const hoverOn = () => {
    setHover(true);
  };

  const hoverOff = () => {
    setHover(false);
  };

  return (
    <SingleProjectCSS featured={featured} isOdd={isOdd}>
      <SingleProjectBackgroundCSS
        background={background}
        featured={featured}
        onMouseEnter={hoverOn}
        onMouseLeave={hoverOff}
        isOdd={isOdd}
        hover={hover}
      />
      <SingleProjectDetailContainerCSS
        featured={featured}
        isOdd={isOdd}
        onMouseEnter={hoverOn}
        onMouseLeave={hoverOff}
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
        <FlexEndCSS>
          <SingleProjectAboutCSS
            color="true"
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
              const { url, type, description = type } = link;
              return (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  title={description}
                >
                  {renderIcon(type)}
                </a>
              );
            })}
          </SingleProjectSocialCSS>
        </FlexEndCSS>
      </SingleProjectDetailContainerCSS>
    </SingleProjectCSS>
  );
};

export default SingleProject;
