import React from 'react';
import styled from 'styled-components';
import Tag from '../../atoms/Tag';

interface TagsProps {
  tags: { tag: string }[];
}

const Tags: React.FC<TagsProps> = ({ tags }) => {
  return (
    <Wrapper>
      {tags.map((tag, index) => {
        return <Tag tag={tag.tag} key={index} />;
      })}
    </Wrapper>
  );
};

export default Tags;

const Wrapper = styled.div`
  align-items: center;
  display: flex;

  > * {
    margin-bottom: 5px;
    margin-right: 5px;
  }

  @media screen and (max-width: ${props => props.theme.screenSmMax}) {
    flex-wrap: wrap;
  }
`;
