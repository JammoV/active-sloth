import React from 'react';
import heroImage from './images/hero.png';
import styled from 'styled-components';

export default () => (
  <Image src={heroImage} alt="The Active Sloth" title="The Active Sloth" />
);

const Image = styled.img`
  max-width: 100%;

  @media screen and (max-width: ${props => props.theme.screenSmMax}) {
    display: none;
  }
`;
