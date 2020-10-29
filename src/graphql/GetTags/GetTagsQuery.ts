import { gql } from '@apollo/client';

const GetTagsQuery = gql`
  query getTags {
    tags(sort: "tag") {
      tag
    }
  }
`;

export interface GetTagsResult {
  tags: TagInterface[];
}

export interface TagInterface {
  tag: string;
}

export interface GetTagsVars {}

export default GetTagsQuery;
