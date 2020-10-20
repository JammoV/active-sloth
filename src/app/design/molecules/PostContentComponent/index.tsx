import React from 'react';
import ReactMarkdown from 'react-markdown';
import Gallery from '../../atoms/Gallery';
import Divider from '../../atoms/Divider';
import { GalleryImage } from '../../../../graphql/GetPost/GetPostQuery';

interface PostContentComponentProps {
  id: string;
  text: string;
  gallery: GalleryImage[];
}

const PostContentComponent = ({
  id,
  text,
  gallery,
}: PostContentComponentProps) => {
  return (
    <div key={id}>
      <ReactMarkdown source={text} />
      <Gallery gallery={gallery} />
      <Divider />
    </div>
  );
};

export default PostContentComponent;
