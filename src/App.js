import React, { useEffect, useState } from "react";
import Main from "./Components/Main";
import LoginForm from "./Components/LoginForm";
import "bootstrap/dist/css/bootstrap.min.css";
import InscriptionForm from "./Components/InscriptionForm";

function App() {
  const BaseURL = "http://localhost:3000/api/bookuser";

  const [users, setUsers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [inscription, setInscription] = useState(false);
  const [connectedUser, setConnectedUser] = useState({});

  async function fetchUsers() {
    try {
      const response = await fetch(BaseURL);
      if (!response.ok) throw new Error("Failed to fetch users");
      const usersData = await response.json();
      setUsers(usersData);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  function handleLogin(email, password) {
    const userFound = users.find(
      (user) => user.email === email && user.pswd === password
    );

    if (userFound) {
      setIsLoggedIn(true);
      setConnectedUser(userFound);
    }
  }

  return (
    inscription? <InscriptionForm SetInsc={setInscription} Users={users} />
    : isLoggedIn? <Main UserInofs={connectedUser} /> 
    : <LoginForm onLogin={handleLogin} SetInsc={setInscription} />
  )


}

export default App;
