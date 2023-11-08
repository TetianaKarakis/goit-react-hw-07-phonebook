import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  background-color: rgba(0, 0, 0, 0.1);

  border-radius: 4px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  font-size: 20px;
`;

export const Input = styled.input`
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
`;

export const Button = styled.button`
max-width: 300px;
text-decoration: none;
display: inline-block;
padding: 12px 40px;
margin: 0 auto;
margin-top: 25px;
margin-bottom: 25px;
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