import React from 'react';
import styled from 'styled-components';
import GetCategories from '../../../../graphql/GetCategories';

interface CategoryFilterProps {
  onChange: (string) => void;
  activeFilter: string;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  onChange,
  activeFilter,
}) => {
  const { loading, error, categories } = GetCategories();

  if (loading || error) {
    return <p>Loading...</p>;
  }

  return (
    <CategoriesWrapper>
      {categories.map(category => {
        if (category === activeFilter) {
          return (
            <ActiveFilter onClick={() => onChange(category)} key={category}>
              {category}
            </ActiveFilter>
          );
        } else {
          return (
            <Filter onClick={() => onChange(category)} key={category}>
              {category}
            </Filter>
          );
        }
      })}
    </CategoriesWrapper>
  );
};

export default CategoryFilter;

const CategoriesWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin: ${props => props.theme.spacingSmall} 0;
  width: 100%;
`;

const Filter = styled.div`
  background-color: ${props => props.theme.greyLight};
  flex-grow: 1;
  padding: 10px;
  text-align: center;

  &:hover {
    cursor: pointer;
  }

  &:first-of-type {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  &:last-of-type {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

const ActiveFilter = styled(Filter)`
  background-color: ${props => props.theme.colorPrimary};
  border-radius: 5px;
  color: white;
  font-weight: 700;
`;
