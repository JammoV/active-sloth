import React from 'react';
import styled from 'styled-components';
import footerImg from './images/footer.png';

export default () => <Footer />;

const Footer = styled.div`
  background: url(${footerImg}) repeat-x center bottom;
  background-size: 51%;
  min-height: 260px;
  width: 100%;

  @media screen and (max-width: ${props => props.theme.screenSmMax}) {
    background-size: 75%;
    background-position: top;
    min-height: 150px;
  }

  @media screen and (max-width: ${props => props.theme.screenXsMax}) {
    min-height: 130px;
  }
`;
