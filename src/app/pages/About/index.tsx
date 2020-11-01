import React from 'react';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import constants from '../../constants';
import GetAbout from '../../../graphql/GetAbout';
import styled from 'styled-components';

export function AboutPage() {
  const { about } = GetAbout();
  return (
    <>
      <Helmet>
        <title>Wie is The Active Sloth?</title>
        <meta name="description" content={constants.description} />
      </Helmet>
      {about && <AboutContent source={about} />}
    </>
  );
}

export default AboutPage;

const AboutContent = styled(ReactMarkdown)`
  margin: 0 auto;
  max-width: 800px;
  padding: 20px;
`;
