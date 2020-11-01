import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import GetPost from '../../../graphql/GetPost';
import Post from '../../design/organisms/Post';
import Loader from '../../design/atoms/Loader';
import constants from '../../constants';

export function PostPage() {
  let { urlKey } = useParams();
  const { post, loading, error } = GetPost(urlKey);

  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content={constants.description} />
      </Helmet>
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
