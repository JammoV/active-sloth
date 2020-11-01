import React from 'react';
import styled from 'styled-components';

export default ({ children }) => <Container>{children}</Container>;

const Container = styled.div`
  flex: 1;
  margin: 0 auto;
  max-width: ${props => props.theme.containerWidth};
  padding: 0 ${props => props.theme.spacing};
`;
