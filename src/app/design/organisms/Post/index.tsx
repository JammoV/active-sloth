import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { PostInterface } from '../../../../graphql/GetPost';
import PostImage, {
  DisplayType as ImageDisplayType,
} from '../../molecules/PostImage';
import PostListComponent from '../../molecules/PostListComponent';
import PostContentComponent from '../../molecules/PostContentComponent';
import RecentPosts, { DisplayType } from '../../molecules/RecentPosts';
import Tags from '../../molecules/Tags';

enum ComponentTypes {
  CONTENT = 'ComponentPostPostContent',
  LIST = 'ComponentPostLijstItem',
}

interface PostProps {
  post: PostInterface;
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <Container>
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.intro} />
      </Helmet>
      <Article>
        <Header>{post.title}</Header>
        <DatePublished>Geplaatst op {post.date}</DatePublished>
        <PostImage
          imageUrl={post.cover.url}
          imageAlt={post.cover.alternativeText || post.title}
          categoryLabel={post.category}
          displayType={ImageDisplayType.Post}
        />
        {post.content.length > 0 &&
          post.content.map(contentItem => {
            if (contentItem.__typename === ComponentTypes.CONTENT) {
              return (
                <PostContentComponent
                  key={contentItem.id}
                  id={contentItem.id}
                  text={contentItem.text}
                  gallery={contentItem.gallery}
                />
              );
            }
            if (contentItem.__typename === ComponentTypes.LIST) {
              return (
                <PostListComponent
                  key={contentItem.id}
                  id={contentItem.id}
                  text={contentItem.text}
                  gallery={contentItem.gallery}
                  header={contentItem.header || ''}
                  number={contentItem.number || 0}
                />
              );
            }
            return <></>;
          })}
        {post.tags && post.tags.length > 0 && <Tags tags={post.tags} />}
      </Article>
      <Sidebar>
        <SidebarHeader>Recente posts</SidebarHeader>
        <RecentPosts
          displayType={DisplayType.Shortened}
          limit={10}
          skip={post.title}
        />
      </Sidebar>
    </Container>
  );
};

export default Post;

const Header = styled.h1`
  font-size: 30px;
  margin: 10px 0;

  @media screen and (max-width: ${props => props.theme.screenSmMax}) {
    font-size: 25px;
  }
`;

const DatePublished = styled.p`
  margin-bottom: 10px;
`;

const Container = styled.div`
  @media screen and (min-width: ${props => props.theme.screenMdMin}) {
    display: flex;
    justify-content: space-between;
  }
`;

const Article = styled.article`
  @media screen and (min-width: ${props => props.theme.screenMdMin}) {
    width: 60%;
  }
`;

const Sidebar = styled.div`
  @media screen and (min-width: ${props => props.theme.screenMdMin}) {
    width: 34%;
  }
`;

const SidebarHeader = styled.h3`
  margin-top: 63px;
`;
