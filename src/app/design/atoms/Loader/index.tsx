import React from 'react';
import styled from 'styled-components';
import GridLoader from 'react-spinners/GridLoader';

const Loader = () => {
  return (
    <LoaderWrapper>
      <GridLoader color={`#539EA5`} loading={true} size={10} />
    </LoaderWrapper>
  );
};

export default Loader;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
  width: calc(100% - 40px);
`;
