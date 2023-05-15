import { IoMdArrowRoundBack } from 'react-icons/io';
import { StyledLink } from './BackLink.styled';

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <IoMdArrowRoundBack size="24" />
      {children}
    </StyledLink>
  );
};