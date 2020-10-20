import { useQuery } from '@apollo/client';
import GetPostsQuery, { GetPostsResult, GetPostsVars } from './GetPostsQuery';
import { DateTime } from 'luxon';

interface GetPostsResultInterface {
  loading: boolean;
  error: boolean;
  posts: Post[];
}

interface ImageInterface {
  url: string;
  caption?: string;
}

export interface Post {
  id: string;
  title: string;
  date: string;
  url_key: string;
  category: string;
  intro: string;
  cover: ImageInterface;
}

const GetPosts = (
  limit: number,
  withFeatured: boolean,
): GetPostsResultInterface => {
  const { loading, error, data } = useQuery<GetPostsResult, GetPostsVars>(
    GetPostsQuery,
    {
      variables: {
        limit,
        withFeatured: withFeatured ? [0, 1] : [0],
      },
    },
  );

  const formatPosts = posts => {
    return posts.map(post => {
      return {
        ...post,
        category: post.category.name,
        date: DateTime.fromISO(post.date).toFormat('dd LLLL yyyy'),
      };
    });
  };

  return {
    loading,
    error: typeof error !== 'undefined',
    posts: typeof data !== 'undefined' ? formatPosts(data.posts) : [],
  };
};

export default GetPosts;
