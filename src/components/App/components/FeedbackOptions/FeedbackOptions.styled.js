import styled from '@emotion/styled';

export const Actions = styled.div`
  display: flex;
  gap: 8px;
`;
export const Button = styled.button`
  cursor: pointer;
  background: firebrick;
  border: 1px solid firebrick;
  padding: 5px 20px;
  border-radius: 50px;
  text-transform: uppercase;
  color: #ffffff;
  transition: color 400ms ease, background-color 400ms ease;

  &:hover {
    color: firebrick;
    background: none;
  }
`;
