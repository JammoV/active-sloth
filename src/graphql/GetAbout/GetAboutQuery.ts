import { gql } from '@apollo/client';

const GetAboutQuery = gql`
  query getAbout {
    about {
      about
    }
  }
`;

export interface GetAboutResult {
  about: {
    about: string;
  };
}

export interface GetAboutVars {}

export default GetAboutQuery;
