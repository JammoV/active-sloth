import React from 'react';
import PostCard from '../../../design/molecules/PostCard';
import { Post } from '../../../../graphql/GetPosts';
import styled from 'styled-components';

interface PostsGridProps {
  posts: Post[];
  categoryFilter?: string | null;
}

const PostsGrid: React.FC<PostsGridProps> = ({
  posts,
  categoryFilter = null,
}) => {
  return (
    <>
      <PostsWrapper>
        {posts.length > 0 &&
          posts.map(post => {
            if (categoryFilter) {
              if (post.category === categoryFilter) {
                return <PostCard post={post} key={post.id} />;
              }
            } else {
              return <PostCard post={post} key={post.id} />;
            }
            return <></>;
          })}
      </PostsWrapper>
      {posts.length === 0 && <p>Geen posts gevonden.</p>}
    </>
  );
};

export default PostsGrid;

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
