import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const Wrapper = styled.form`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  padding: 8px 32px 8px 8px;
  font: inherit;
  border: 2px solid #2b6a6e;
  background-color: #f5f0bb;
`;

export const Icon = styled(FaSearch)`
  width: 15px;
  height: 15px;
  position: absolute;
  right: 24px;
  color: #2b6a6e;
`;

export const Btn = styled.button`
  width: 60px;
  height: 37px;
  display: flex;
  justify-items: center;
  align-items: center;
  margin-left: 10px;
  border: 2px solid #2b6a6e;
  color: black;
  background-color: #f5f0bb;
  :hover {
    opacity: 0.5;
  }
`;
