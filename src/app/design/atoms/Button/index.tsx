import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  type: string;
  label: string;
  url?: string | null;
  title?: string | null;
}

const Button = ({ type, label, url = null, title = null }: ButtonProps) => {
  if (url) {
    return (
      <a href={url} title={title ? title : label}>
        <ButtonElement>{label}</ButtonElement>
      </a>
    );
  }

  return <ButtonElement>{label}</ButtonElement>;
};

export default Button;

const ButtonElement = styled.button`
  background-color: ${props => props.theme.colorPrimary};
  border-radius: ${props => props.theme.borderRadius};
  border: none;
  color: white;
  display: inline-block;
  font-family: ${props => props.theme.bodyFont};
  font-size: 16px;
  font-weight: 700;
  padding: ${props => props.theme.spacingSmall}
    ${props => props.theme.spacingLarge};

  &:focus {
    border: none;
    outline: none;
  }

  &:hover {
    background-color: ${props => props.theme.colorPrimaryDark};
    cursor: pointer;
    text-decoration: none;
  }
`;
