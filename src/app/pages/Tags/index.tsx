import React, { useState } from 'react';
import GetTags from '../../../graphql/GetTags';
import GetPostsByTag from '../../../graphql/GetPostsByTag';
import PostsGrid from '../../design/organisms/PostsGrid';

export function Tags() {
  const [activeTag, setActiveTag] = useState<string>('');
  const { tags } = GetTags();
  const { posts, loading, error } = GetPostsByTag(activeTag);

  return (
    <>
      <h2>Alle tags</h2>
      {tags.map(({ tag }, index) => (
        <span onClick={() => setActiveTag(tag)} key={index}>
          {tag}
        </span>
      ))}

      {activeTag && (
        <>
          <h3>Alle posts met tag {activeTag}</h3>
          {!loading && !error && <PostsGrid posts={posts} />}
        </>
      )}
    </>
  );
}
