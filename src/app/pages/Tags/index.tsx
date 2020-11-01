import React from 'react';
import { useParams } from 'react-router-dom';
import GetTags from '../../../graphql/GetTags';
import GetPostsByTag from '../../../graphql/GetPostsByTag';
import Loader from '../../design/atoms/Loader';
import PostsGrid from '../../design/organisms/PostsGrid';
import Tags from '../../design/molecules/Tags';

export function TagsPage() {
  let { tag } = useParams();
  const { tags } = GetTags();
  const { posts, loading, error } = GetPostsByTag(tag);

  return (
    <>
      <Tags tags={tags} />
      {tag && (
        <>
          <h3>Alle posts met tag {tag}</h3>
          {loading && <Loader />}
          {!loading && !error && <PostsGrid posts={posts} />}
        </>
      )}
    </>
  );
}

export default TagsPage;
