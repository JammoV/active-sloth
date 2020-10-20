import React from 'react';
import ReactMarkdown from 'react-markdown';
import Gallery from '../../atoms/Gallery';
import Divider from '../../atoms/Divider';
import { GalleryImage } from '../../../../graphql/GetPost/GetPostQuery';

interface PostListComponentProps {
  id: string;
  number: number;
  header: string;
  text: string;
  gallery: GalleryImage[];
}

const PostListComponent = ({
  id,
  number,
  header,
  text,
  gallery,
}: PostListComponentProps) => {
  return (
    <div key={id}>
      <h2>
        #{number} - {header}
      </h2>
      <ReactMarkdown source={text} />
      <Gallery gallery={gallery} />
      <Divider />
    </div>
  );
};

export default PostListComponent;
