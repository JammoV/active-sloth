import React from 'react';
import styled from 'styled-components';

const Divider = () => <HorizontalLine />;

export default Divider;

const HorizontalLine = styled.div`
  border-top: 1px solid #e9e9e9;
  display: block;
  margin: ${props => props.theme.spacing} 0;
`;
