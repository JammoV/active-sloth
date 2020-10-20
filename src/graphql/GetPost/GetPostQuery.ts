import { gql } from '@apollo/client';

const GetPostQuery = gql`
  query getPostByUrlKey($urlKey: String) {
    postByUrlKey(url_key: $urlKey) {
      title
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
      content {
        ... on ComponentPostPostContent {
          id
          text
          gallery {
            name
            caption
            alternativeText
            url
            width
            height
          }
        }
        ... on ComponentPostLijstItem {
          id
          number
          header
          text
          gallery {
            name
            caption
            alternativeText
            url
            width
            height
          }
        }
      }
      date
      updated_at
      tags {
        tag
      }
    }
  }
`;

export interface GetPostResult {
  postByUrlKey: Post;
}

export interface GetPostVars {}

export interface GalleryImage {
  name: string;
  caption: string;
  alternativeText: string;
  url: string;
  width: number;
  height: number;
}

export interface DynamicContentComponent {
  __typename: string;
  id: string;
  number?: number;
  header?: string;
  text: string;
  gallery: GalleryImage[];
}

interface Post {
  title: string;
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
  content: DynamicContentComponent[];
  date: string;
}

export default GetPostQuery;
