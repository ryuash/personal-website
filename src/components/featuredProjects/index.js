import React from 'react'
import Title from '@components/title'
import SingleProject from '@components/singleProject'
import {
  FeatureProjectsCSS,
  FeatureProjectsGridCSS,
  FeatureProjectSingleGridCSS
} from './styles'
import { fakeProjectData, test } from './config'

const data = [fakeProjectData, test, fakeProjectData]

const FeaturedProjects = () => {
  return (
    <FeatureProjectsCSS>
      <Title title="Featured Projects" color="red" />
      <FeatureProjectsGridCSS>
        {data.map((x, i) => {
          const isOdd = !(i % 2)

          return (
            <FeatureProjectSingleGridCSS isOdd={isOdd}>
              <SingleProject
                data={x}
                featured
                isOdd={isOdd}
                key={i}
              />
              {/* <hr /> */}
            </FeatureProjectSingleGridCSS>
          )
        })}
      </FeatureProjectsGridCSS>
    </FeatureProjectsCSS>
  )
}

export default FeaturedProjects
