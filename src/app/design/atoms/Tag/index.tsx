import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface TagProps {
  tag: string;
}

const Tag = ({ tag }: TagProps) => {
  return <TagLink to={`/tags/${tag}`}>{tag}</TagLink>;
};

export default Tag;

const TagLink = styled(Link)`
  background-color: ${props => props.theme.colorSecondary};
  border-radius: 5px;
  color: white;
  font-size: 13px;
  font-weight: 400;
  padding: 5px 10px;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    background-color: ${props => props.theme.colorSecondaryDark};
  }
`;
