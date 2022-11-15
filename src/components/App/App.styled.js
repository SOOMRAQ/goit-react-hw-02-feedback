import styled from '@emotion/styled';

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 500px;
  padding: 40px;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 50px;
  transition: background-color 400ms ease;

  &:hover {
    background-color: lightblue;
  }
`;

export default Container;
