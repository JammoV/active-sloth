import { gql } from '@apollo/client';

const GetPostsQuery = gql`
  query getPosts($limit: Int!, $withFeatured: [Int]!) {
    posts(
      where: { active: 1, featured: $withFeatured }
      sort: "date:DESC"
      limit: $limit
    ) {
      id
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

export interface GetPostsResult {
  posts: Post[];
}

export interface GetPostsVars {}

export interface Post {
  id: string;
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

export default GetPostsQuery;
