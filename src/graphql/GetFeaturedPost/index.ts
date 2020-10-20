import { useQuery } from '@apollo/client';
import GetFeaturedPostQuery, {
  GetFeaturedPostResult,
  GetFeaturedPostVars,
} from './GetFeaturedPostQuery';
import { DateTime } from 'luxon';

interface GetFeaturedPostResultInterface {
  loading: boolean;
  error: boolean;
  post: Post;
}

interface ImageInterface {
  url: string;
  caption?: string;
}

interface Post {
  title: string;
  url_key: string;
  date: string;
  category: string;
  intro: string;
  cover: ImageInterface;
}

const GetFeaturedPost = (): GetFeaturedPostResultInterface => {
  const { loading, error, data } = useQuery<
    GetFeaturedPostResult,
    GetFeaturedPostVars
  >(GetFeaturedPostQuery, {});

  const formatPost = post => {
    return {
      ...post,
      category: post.category.name,
      date: DateTime.fromISO(post.date).toFormat('dd LLLL yyyy'),
    };
  };

  const emptyPost = {
    title: '',
    date: '',
    category: '',
    intro: '',
    content: [],
    cover: {
      url: '',
      caption: '',
    },
  };

  return {
    loading,
    error: typeof error !== 'undefined',
    post: typeof data !== 'undefined' ? formatPost(data.posts[0]) : emptyPost,
  };
};

export default GetFeaturedPost;
