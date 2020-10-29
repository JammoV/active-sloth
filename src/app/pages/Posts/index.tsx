import React, { useState } from 'react';
import CenteredHeader from '../../design/atoms/CenteredHeader';
import GetPosts from '../../../graphql/GetPosts';
import CategoryFilter from '../../design/molecules/CategoryFilter';
import PostsGrid from '../../design/organisms/PostsGrid';

export function Posts() {
  const { posts } = GetPosts(50, true);
  const [categoryFilter, setCategoryFilter] = useState<string>('');

  return (
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
  );
}
