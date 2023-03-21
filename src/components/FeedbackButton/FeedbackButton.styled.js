import styled from 'styled-components';

export const ListBtn = styled.ul`
 list-style: none;
 padding: 0;
 display: flex;
 justify-content: center;
 gap: 15px;
`;

export const StyleBtn = styled.button`
padding: 10px 15px;
border-radius: 5px;
font-size: 15px;
border: none;
color: black;
cursor: pointer;
transition: 400ms;
background-color: ${({ id }) => {
  switch (id) {
    case 'good':
      return 'lightgreen';
    case 'neutral':
      return 'orange';
    case 'bad':
      return 'red';
    default:
      return 'black';
  }
}};
&:hover {
  scale: 1.1;
}
`;