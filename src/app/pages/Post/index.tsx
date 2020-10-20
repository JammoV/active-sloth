import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import GetPost from '../../../graphql/GetPost';
import Post from '../../design/organisms/Post';
import constants from '../../constants';

export function PostPage() {
  let { urlKey } = useParams();
  const { loading, post } = GetPost(urlKey);

  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content={constants.description} />
      </Helmet>
      <div>
        {loading && <div>Loading...</div>}
        {typeof post !== 'undefined' && <Post post={post} />}
      </div>
    </>
  );
}
