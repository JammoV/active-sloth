import { useQuery } from '@apollo/client';
import GetCategoriesQuery, {
  GetCategoriesResult,
  GetCategoriesVars,
} from './GetCategoriesQuery';

interface GetCategoriesResultInterface {
  loading: boolean;
  error: boolean;
  categories: string[];
}

const GetCategories = (): GetCategoriesResultInterface => {
  const { loading, error, data } = useQuery<
    GetCategoriesResult,
    GetCategoriesVars
  >(GetCategoriesQuery);

  const formatCategories = categories => {
    const categoryArray: string[] = [];

    categories.forEach(category => {
      categoryArray.push(category.name);
    });

    return categoryArray;
  };

  return {
    loading,
    error: typeof error !== 'undefined',
    categories:
      typeof data !== 'undefined' ? formatCategories(data.categories) : [],
  };
};

export default GetCategories;
