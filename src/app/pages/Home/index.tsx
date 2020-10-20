import React from 'react';
import { Helmet } from 'react-helmet-async';
import constants from '../../constants';
import { Link } from 'react-router-dom';
import HeroImage from '../../design/atoms/HeroImage';
import CenteredHeader from '../../design/atoms/CenteredHeader';
import FeaturedPost from '../../design/organisms/FeaturedPost';
import RecentPosts from '../../design/molecules/RecentPosts';
import styled from 'styled-components';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content={constants.description} />
      </Helmet>
      <HeroImage />
      <FeaturedPost />
      <CenteredHeader>Lees ook...</CenteredHeader>
      <RecentPosts limit={3} withFeatured={false} />
      <ReadMore>
        ...of <Link to="/posts">klik hier</Link> voor meer posts!
      </ReadMore>
    </>
  );
}

const ReadMore = styled.p`
  text-align: center;
`;
