import { useQuery } from '@apollo/client';
import GetPostsByTagQuery, {
  GetPostsByTagResult,
  GetPostsByTagVars,
} from './GetPostsByTagQuery';
import { DateTime } from 'luxon';
import { Post } from '../GetPosts';

interface GetPostsByTagResultInterface {
  loading: boolean;
  error: boolean;
  posts: Post[];
}

const GetPostsByTag = (tag: string): GetPostsByTagResultInterface => {
  const { loading, error, data } = useQuery<
    GetPostsByTagResult,
    GetPostsByTagVars
  >(GetPostsByTagQuery, {
    variables: {
      tag: tag,
    },
    skip: typeof tag === 'undefined' || tag === '',
  });

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

export default GetPostsByTag;
