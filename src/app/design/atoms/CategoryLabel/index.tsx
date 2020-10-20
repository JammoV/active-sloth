import React from 'react';
import styled from 'styled-components';

interface CategoryLabelProps {
  label: string;
}

const CategoryLabel = ({ label }: CategoryLabelProps) => {
  return <Label>{label}</Label>;
};

export default CategoryLabel;

const Label = styled.div`
  background-color: ${props => props.theme.colorSecondary};
  border-radius: 5px;
  color: white;
  font-size: 14px;
  font-weight: 700;
  padding: 5px 10px;
  text-transform: uppercase;
`;
