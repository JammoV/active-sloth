import { gql } from '@apollo/client';

const GetFeaturedPostQuery = gql`
  query getFeaturedPost {
    posts(where: { featured: 1, active: 1 }, limit: 1) {
      title
      url_key
      category {
        name
      }
      cover {
        name
        caption
        alternativeText
        url
      }
      intro
      date
    }
  }
`;

export interface GetFeaturedPostResult {
  posts: Post[];
}

export interface GetFeaturedPostVars {}

interface Post {
  title: string;
  url_key: string;
  category: {
    name: string;
  };
  cover: {
    name: string;
    caption: string;
    alternativeText: string;
    url: string;
  };
  intro: string;
  date: string;
}

export default GetFeaturedPostQuery;
