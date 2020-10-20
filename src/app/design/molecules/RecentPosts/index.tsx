import React from 'react';
import styled from 'styled-components';
import GetPosts from '../../../../graphql/GetPosts';
import PostCard from '../PostCard';

export enum DisplayType {
  Shortened,
  Default,
}

interface RecentPostsProps {
  limit?: number;
  displayType?: DisplayType;
  withFeatured?: boolean;
}

const RecentPosts: React.FC<RecentPostsProps> = ({
  limit = 3,
  displayType = DisplayType.Default,
  withFeatured = true,
}) => {
  const { loading, error, posts } = GetPosts(limit, withFeatured);

  if (loading || error) {
    return <></>;
  }
  return (
    <PostsWrapper>
      {posts.map(post => {
        return <PostCard post={post} displayType={displayType} key={post.id} />;
      })}
    </PostsWrapper>
  );
};

export default RecentPosts;

const PostsWrapper = styled.div`
  align-content: space-between;
  display: flex;
  flex-flow: row wrap;
  margin-left: -20px;
  margin-right: -20px;
  width: calc(100% + 40px);

  > a {
    flex: 1;
    padding: 20px;
    min-width: 300px;
  }
`;
