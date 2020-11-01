import { useQuery } from '@apollo/client';
import GetPostQuery, {
  GetPostResult,
  GetPostVars,
  DynamicContentComponent,
} from './GetPostQuery';
import { DateTime } from 'luxon';

interface GetPostResultInterface {
  loading: boolean;
  error: boolean;
  post: PostInterface;
}

interface ImageInterface {
  url: string;
  alternativeText: string;
  caption?: string;
}

export interface PostInterface {
  title: string;
  date: string;
  category: string;
  intro: string;
  content: DynamicContentComponent[];
  cover: ImageInterface;
  tags: {
    tag: string;
  }[];
}

const GetPost = (urlKey: string): GetPostResultInterface => {
  const { loading, error, data } = useQuery<GetPostResult, GetPostVars>(
    GetPostQuery,
    {
      variables: {
        urlKey,
      },
    },
  );

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
    post:
      typeof data !== 'undefined' ? formatPost(data.postByUrlKey) : emptyPost,
  };
};

export default GetPost;
