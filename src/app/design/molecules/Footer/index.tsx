import React from 'react';
import styled from 'styled-components';
import footerImg from './images/footer.png';

export default () => <Footer />;

const Footer = styled.div`
  background: url(${footerImg}) repeat-x center bottom;
  min-height: 450px;
  width: 100%;
`;
