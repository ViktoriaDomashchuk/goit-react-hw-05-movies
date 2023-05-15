import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 0;
  color: #2b6a6e;
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 10px;

  :hover {
    opacity: 0.5;
  }
`;
