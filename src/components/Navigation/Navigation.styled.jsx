import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  gap: 4px;

  @media screen and (min-width: 768px) {
    gap: 15px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 700;
  color: white;

  transition: all 0.5s ease;

  &.active {
    color: white;
    &:hover {
        color: #ffffff;
    }
  }

  &:hover {
    color: #ffffff;
  }

  @media screen and (min-width: 768px) {
    font-size: 22px;

    &.active {
      color: #000000c7;
      background-color: #939393;
      border-radius: 10px;
      padding: 5px;

      &:hover {
        color: #000000c7;
        background-color: #939393;
        border-radius: 10px;
        padding: 5px;
      }
    }

    &:hover {
      color: #000000c7;
      background-color: #939393;
      border-radius: 10px;
      padding: 5px;
    }
  }
`;