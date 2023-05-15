import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 150px);
  gap: 10px;
`;

export const Profile = styled.li`
  display: block;
  text-align: center;
  opacity: 1;
`;

export const ProfilePhoto = styled.img`
  margin-left: auto;
  margin-right: auto;
`;
