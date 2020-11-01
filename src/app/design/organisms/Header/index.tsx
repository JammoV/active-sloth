import React from 'react';
import styled from 'styled-components';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaHome, FaPenSquare, FaAddressCard } from 'react-icons/fa';
import logo from './images/the-active-sloth.png';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <HeaderContainer>
      <Link to="/">
        <Image
          src={logo}
          alt="The Active Sloth logo"
          title="The Active Sloth"
        />
      </Link>
      <Navigation>
        <NavigationLink key={1} to="/" exact>
          <FaHome />
          Home
        </NavigationLink>
        <NavigationLink
          key={2}
          to="/posts/"
          isActive={() => pathname.startsWith('/post')}
        >
          <FaPenSquare />
          Blogs
        </NavigationLink>
        <NavigationLink key={3} to="/about/">
          <FaAddressCard />
          About
        </NavigationLink>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: ${props => props.theme.containerWidth};
  text-align: center;
`;

const Image = styled.img`
  margin: ${props => props.theme.spacing};

  @media screen and (max-width: ${props => props.theme.screenSmMax}) {
    max-width: 70%;
    margin: ${props => props.theme.spacingSmall} auto;
  }
`;

const Navigation = styled.nav`
  display: flex;
  margin-bottom: ${props => props.theme.spacing};

  @media screen and (max-width: ${props => props.theme.screenSmMax}) {
    align-content: center;
    background: rgb(64, 130, 136);
    background: linear-gradient(
      339deg,
      rgba(64, 130, 136, 1) 0%,
      rgba(83, 158, 165, 1) 100%
    );
    bottom: 0;
    flex-flow: row wrap;
    height: 80px;
    justify-content: space-around;
    left: 0;
    margin-bottom: 0;
    position: fixed;
    width: 100%;
    z-index: 9;
  }
`;

const NavigationLink = styled(NavLink)`
  color: ${props => props.theme.textColor};
  display: block;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  font-weight: 400;
  padding: 0 ${props => props.theme.spacing};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    color: ${props => props.theme.colorSecondary};
    font-weight: 700;
  }

  @media screen and (min-width: ${props => props.theme.screenMdMin}) {
    svg {
      display: none;
    }
  }

  @media screen and (max-width: ${props => props.theme.screenSmMax}) {
    align-items: center;
    color: white;
    display: flex;
    flex-flow: column;
    font-size: 15px;

    svg {
      font-size: 17px;
    }

    &.active {
      color: white;
    }
  }
`;
