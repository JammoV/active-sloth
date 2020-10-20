import React from 'react';
import styled from 'styled-components';
import { PostInterface } from '../../../../graphql/GetPost';
import PostImage, {
  DisplayType as ImageDisplayType,
} from '../../molecules/PostImage';
import PostListComponent from '../../molecules/PostListComponent';
import PostContentComponent from '../../molecules/PostContentComponent';
import RecentPosts, { DisplayType } from '../../molecules/RecentPosts';

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
      <Article>
        <Header>{post.title}</Header>
        <DatePublished>Geplaatst op {post.date}</DatePublished>
        <PostImage
          imageUrl={post.cover.url}
          imageAlt={post.cover.caption || post.title}
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
      </Article>
      <Sidebar>
        <SidebarHeader>Recente posts</SidebarHeader>
        <RecentPosts displayType={DisplayType.Shortened} limit={10} />
      </Sidebar>
    </Container>
  );
};

export default Post;

const Header = styled.h1`
  font-size: 30px;
  margin: 10px 0;
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
