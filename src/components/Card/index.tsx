import { Container } from "./styles";
interface CardProps {
  name: string;
  age: number;
  hobby: string;
}

export const Card = ({ name = "", age = 0, hobby = "" }: CardProps) => (
  <Container>
    <h3>Nome: {name}</h3>
    <p>Idade: {age}</p>
    <p>Hobby: {hobby}</p>
  </Container>
);
