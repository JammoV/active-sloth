import { gql } from '@apollo/client';
import { GetPostsResult } from '../GetPosts/GetPostsQuery';

const GetPostsByTagQuery = gql`
  query getPosts($tag: String!) {
    posts(where: { tags: { tag: $tag } }, sort: "date:DESC") {
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
      tags {
        tag
      }
    }
  }
`;

export interface GetPostsByTagResult extends GetPostsResult {}

export interface GetPostsByTagVars {
  tag: string;
}

export default GetPostsByTagQuery;
