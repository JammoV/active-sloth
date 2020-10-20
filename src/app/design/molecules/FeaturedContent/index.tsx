import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../../atoms/Button';

interface Post {
  title: string;
  url_key: string;
  date: string;
  category: string;
  intro: string;
}

interface FeaturedContentProps {
  post: Post;
}

const FeaturedContent: React.FC<FeaturedContentProps> = ({ post }) => {
  if (post.title === '') {
    return <></>;
  }

  return (
    <FeaturedContentWrapper>
      <h2>{post.title}</h2>
      <PublishedDate>{post.date}</PublishedDate>
      <p>{post.intro}</p>
      <Link to={`/post/${post.url_key}`}>
        <Button type="primary" label="Lees meer" />
      </Link>
    </FeaturedContentWrapper>
  );
};

export default FeaturedContent;

const FeaturedContentWrapper = styled.div`
  background-color: ${props => props.theme.colorTertiaryLight};
  border-radius: ${props => props.theme.borderRadius};
  float: right;
  padding: 40px 40px 40px 80px;
  width: 50%;

  @media screen and (max-width: ${props => props.theme.screenSmMax}) {
    padding: 0 20px 20px 20px;
    margin-bottom: 40px;
    width: 100%;
  }
`;

const PublishedDate = styled.p`
  color: ${props => props.theme.grey};
  margin-bottom: ${props => props.theme.spacingSmall};
`;
