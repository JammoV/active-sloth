import React from 'react';
import styled from 'styled-components';
import CategoryLabel from '../../atoms/CategoryLabel';

export enum DisplayType {
  Post,
  Card,
}

interface CategoryLabelProps {
  imageUrl: string;
  imageAlt: string;
  displayType?: DisplayType;
  categoryLabel?: string;
}

const PostImage = ({
  imageUrl,
  imageAlt,
  displayType = DisplayType.Card,
  categoryLabel,
}: CategoryLabelProps) => {
  return (
    <PostImageWrapper>
      {typeof categoryLabel !== 'undefined' && (
        <CategoryLabel label={categoryLabel} />
      )}
      {displayType === DisplayType.Post && (
        <Image src={imageUrl} alt={imageAlt} />
      )}
      {displayType === DisplayType.Card && (
        <CardImage src={imageUrl} alt={imageAlt} />
      )}
    </PostImageWrapper>
  );
};

export default PostImage;

const PostImageWrapper = styled.div`
  position: relative;

  > div {
    left: -10px;
    position: absolute;
    top: 20px;
  }
`;

const Image = styled.img`
  border-radius: ${props => props.theme.borderRadius};
  margin-bottom: ${props => props.theme.spacing};
  object-fit: cover;
  width: 100%;
`;

const CardImage = styled.img`
  border-radius: ${props => props.theme.borderRadius};
  margin-bottom: ${props => props.theme.spacingSmall};
  object-fit: cover;
  height: 200px;
  width: 100%;
`;
