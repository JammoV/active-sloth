import { gql } from '@apollo/client';

const GetCategoriesQuery = gql`
  query getCategories {
    categories {
      name
    }
  }
`;

export interface GetCategoriesResult {
  categories: Category[];
}

export interface GetCategoriesVars {}

interface Category {
  name: string;
}

export default GetCategoriesQuery;
