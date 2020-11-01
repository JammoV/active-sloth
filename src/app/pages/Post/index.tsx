import React from 'react';
import { useParams } from 'react-router-dom';
import GetPost from '../../../graphql/GetPost';
import Post from '../../design/organisms/Post';
import Loader from '../../design/atoms/Loader';

export function PostPage() {
  let { urlKey } = useParams();
  const { post, loading, error } = GetPost(urlKey);

  return (
    <>
      <div>
        {loading && <Loader />}
        {!loading && !error && typeof post !== 'undefined' && (
          <Post post={post} />
        )}
      </div>
    </>
  );
}

export default PostPage;
