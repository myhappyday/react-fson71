import styled from 'styled-components';

export const Header = styled.h5`
  color: white;
  /* background-color: darkgray; */
  background-color: ${props => {
    return props.isOn ? 'green' : 'red';
  }};
  &:hover {
    background-color: aqua;
  }
`;
