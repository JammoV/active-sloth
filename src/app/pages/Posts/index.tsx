import React, { useState } from 'react';
import CenteredHeader from '../../design/atoms/CenteredHeader';
import GetPosts from '../../../graphql/GetPosts';
import CategoryFilter from '../../design/molecules/CategoryFilter';
import PostsGrid from '../../design/organisms/PostsGrid';
import Loader from '../../design/atoms/Loader';

export function PostsPage() {
  const { posts, loading, error } = GetPosts(50, true);
  const [categoryFilter, setCategoryFilter] = useState<string>('');

  return (
    <>
      {loading && <Loader />}
      {!loading && !error && (
        <>
          <CenteredHeader>Filter op</CenteredHeader>
          <CategoryFilter
            onChange={category =>
              setCategoryFilter(categoryFilter === category ? '' : category)
            }
            activeFilter={categoryFilter}
          />
          <PostsGrid posts={posts} categoryFilter={categoryFilter} />
        </>
      )}
    </>
  );
}

export default PostsPage;
