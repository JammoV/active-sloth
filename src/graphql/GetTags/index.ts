import { useQuery } from '@apollo/client';
import GetTagsQuery, {
  GetTagsResult,
  GetTagsVars,
  TagInterface,
} from './GetTagsQuery';

interface GetTagsResultInterface {
  loading: boolean;
  error: boolean;
  tags: TagInterface[];
}

const GetTags = (): GetTagsResultInterface => {
  const { loading, error, data } = useQuery<GetTagsResult, GetTagsVars>(
    GetTagsQuery,
  );

  return {
    loading,
    error: typeof error !== 'undefined',
    tags: typeof data !== 'undefined' ? data.tags : [],
  };
};

export default GetTags;
