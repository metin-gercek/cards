import "./App.css";
import React, { useState, useEffect } from "react";
import Details from "./components/Details";
import CardList from "./components/CardList";

const url = "https://jsonplaceholder.typicode.com/users";

function App() {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url).then((response) =>
        response.json()
      );
      // console.log(response);
      setUsers(response);
    };
    fetchData();
  }, []);

  const handleClick = (user, showDetails) => {
    if (showDetails) {
      setUser(user);
    } else {
      setUser(null);
    }
  };

  return (
    <div className="App">
    {user == null ? (
      <CardList users={users} handleClick={handleClick} />
    ) : (
      <Details user={user} handleClick={handleClick} />
    )}
    
  </div>
  );
}

export default App;
