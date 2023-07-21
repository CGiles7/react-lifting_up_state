import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Content from "./Content";

//state is stored in App component because it is the parent of header and content, therefore it can be passed down to each child component
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const toggleLoggedIn = () => setLoggedIn(!loggedIn);
  return (
    <div>
      <Header loggedIn={loggedIn} handleLoggedInClick={toggleLoggedIn} />
      <Content loggedIn={loggedIn} text="My content." />;
    </div>
  );
}

export default App;
