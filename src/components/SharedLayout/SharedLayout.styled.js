import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { TbMovie } from 'react-icons/tb';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid #2b6a6e;
  > nav {
    display: flex;
  }
`;

export const Logo = styled.div`
  font-weight: 700;
  margin: 0;
  display: flex;
  justify-items: center;
  align-items: center;
  color: black;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  text-decoration: none;
  color: #73a9ad;
  font-weight: 700;

  &.active {
    color: #316d71;
  }
`;

export const Icon = styled(TbMovie)`
  width: 25px;
  height: 25px;
  color: #2b6a6e;
`;
