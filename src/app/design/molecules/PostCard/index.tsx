import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PostImage from '../PostImage';

export enum DisplayType {
  Shortened,
  Default,
}

interface ImageInterface {
  url: string;
  caption?: string;
}

interface Post {
  id: string;
  title: string;
  url_key: string;
  date: string;
  cover: ImageInterface;
  category: string;
  intro: string;
}

interface PostCardProps {
  post: Post;
  displayType?: DisplayType;
}

const PostCard: React.FC<PostCardProps> = ({
  post,
  displayType = DisplayType.Default,
}) => {
  return (
    <CardLink to={`/post/${post.url_key}`} key={post.id}>
      <Card>
        <PostImage
          imageUrl={post.cover.url}
          imageAlt={post.cover.url ? post.cover.url : post.title}
          categoryLabel={post.category}
        />
        <Title>{post.title}</Title>
        <Published>Geplaatst op {post.date}</Published>
        {displayType === DisplayType.Default && <p>{post.intro}</p>}
        <ReadMore>Lees verder</ReadMore>
      </Card>
    </CardLink>
  );
};

export default PostCard;

const Card = styled.div``;

const CardLink = styled(Link)`
  color: ${props => props.theme.textColor};
  text-decoration: none;
`;

const Published = styled.p`
  color: ${props => props.theme.grey};
  margin-bottom: ${props => props.theme.spacingSmall};
`;

const ReadMore = styled.p`
  color: ${props => props.theme.colorPrimary};
  font-weight: 700;
  margin-bottom: ${props => props.theme.spacingSmall};
`;

const Title = styled.h3`
  margin-top: 0;
`;
