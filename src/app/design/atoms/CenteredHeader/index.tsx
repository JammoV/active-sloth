import React from 'react';
import styled from 'styled-components';

const CenteredHeader = ({ children }) => <Header>{children}</Header>;

export default CenteredHeader;

const Header = styled.h2`
  text-align: center;
  margin: ${props => props.theme.spacing} 0;
`;
