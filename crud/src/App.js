import { useState } from "react";
import Form from "./components/Form";
import User from "./components/User";

export default function App() {
  const [data, setData] = useState(JSON.parse(localStorage.getItem('users')) || []);
  const [user, setUser] = useState("");

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let userInput=user.trim();
    if(!userInput.length) return;
    const obj = {item: user}
    setData([...data, obj]);
    localStorage.setItem('users', JSON.stringify([...data, obj]));
    setUser("");
  };

  const handleDelete = (index) => {
    data.splice(index, 1);
    localStorage.setItem('users', JSON.stringify([...data]));
    setData([...data]);
  };

  return (
    <div className="App">
      <h1>USER DETAILS</h1>
      <Form
        user={user}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      {data &&
        data.map((item, index) => {
          return (
            <User
              userName={item.item}
              index={index}
              handleDelete={handleDelete}
            />
          );
        })}
    </div>
  );
}