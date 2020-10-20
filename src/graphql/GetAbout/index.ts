import { useQuery } from '@apollo/client';
import GetAboutQuery, { GetAboutResult, GetAboutVars } from './GetAboutQuery';

interface GetAboutResultInterface {
  loading: boolean;
  error: boolean;
  about: string;
}

const GetAbout = (): GetAboutResultInterface => {
  const { loading, error, data } = useQuery<GetAboutResult, GetAboutVars>(
    GetAboutQuery,
    {},
  );

  return {
    loading,
    error: typeof error !== 'undefined',
    about: typeof data !== 'undefined' ? data.about.about : '',
  };
};

export default GetAbout;
