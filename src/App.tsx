import { useState } from "react";
import { Container } from "./components/Card/styles";
import "./App.css";
import { Input } from "./components/Input";
import { Card } from "./components/Card";

function App() {
  interface User {
    name: string;
    age: number;
    hobby: string;
  }
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [hobby, setHobby] = useState<string>("");
  const [user, setUser] = useState<User[]>([] as User[]);
  const handleSubmit = () => {
    const data = {
      name: name,
      age: age,
      hobby: hobby,
    };
    setUser([...user, data]);
    setName("");
    setAge(0);
    setHobby("");
  };
  return (
    <div className="App">
      <Container>
        <form>
          <Input
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Idade"
            value={age}
            onChange={(e) => setAge(e.target.value as any)}
          />
          <Input
            placeholder="Hobby"
            value={hobby}
            onChange={(e) => setHobby(e.target.value)}
          />
          <button type="button" onClick={handleSubmit}>
            Enviar
          </button>
        </form>
      </Container>
      <div className="cards">
        {user.map((user) => (
          <Card name={user.name} age={user.age} hobby={user.hobby} />
        ))}
      </div>
    </div>
  );
}

export default App;
