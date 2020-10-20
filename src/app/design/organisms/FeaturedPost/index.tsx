import React from 'react';
import styled from 'styled-components';
import FeaturedContent from '../../molecules/FeaturedContent';
import GetFeaturedPost from '../../../../graphql/GetFeaturedPost';
import PostImage, { DisplayType } from '../../molecules/PostImage';

const FeaturedPost = () => {
  const { post } = GetFeaturedPost();

  return (
    <FeaturedPostWrapper>
      <FeaturedImageWrapper>
        <FeaturedImage
          imageUrl={post.cover.url}
          imageAlt={post.title}
          displayType={DisplayType.Post}
          categoryLabel={post.category}
        />
      </FeaturedImageWrapper>
      <FeaturedContent post={post} />
    </FeaturedPostWrapper>
  );
};

export default FeaturedPost;

const FeaturedPostWrapper = styled.div`
  display: inline-block;
  margin: ${props => props.theme.spacing} 0;
  position: relative;

  @media screen and (max-width: ${props => props.theme.screenSmMax}) {
    margin: ${props => props.theme.spacingSmall} 0;
  }
`;

const FeaturedImageWrapper = styled.div`
  position: absolute;
  width: calc(50% + 40px);

  @media screen and (max-width: ${props => props.theme.screenMdMax}) {
    width: calc(40% + 40px);
  }

  @media screen and (max-width: ${props => props.theme.screenSmMax}) {
    position: relative;
    width: 100%;
  }
`;

const FeaturedImage = styled(PostImage)`
  border-radius: ${props => props.theme.borderRadius};
  margin-top: ${props => props.theme.spacing};
  max-width: 100%;
`;
