import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.1);

  list-style: none;
`;

export const Item = styled.li`
  background-color: #ffffff;

  padding: 10px;
  border-radius: 4px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
`;

export const Button = styled.button`
max-width: 100px;
text-decoration: none;
display: inline-block;
padding: 12px;
border-radius: 30px;
background-image: linear-gradient(45deg, #6ab1d7 0%, #33d9de 50%, #002878 100%);
background-position: 100% 0;
background-size: 200% 200%;
font-family: 'Montserrat', sans-serif;
font-size: 24px;
font-weight: 300;
color: white;
box-shadow: 0 16px 32px 0 rgba(0, 40, 120, .35);
cursor: pointer;
`;