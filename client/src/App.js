import "./App.css";
import Login from "./Components/Login";
import Layout from "./Components/Layout";
import { Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import Register from "./Components/Register";
import Profile from "./Components/Profile";
import Proute from "./Components/Proute";
import Data1 from "./Components/Data1";
import Data2 from "./Components/Data2";

import { useContext, useState, createContext } from "react";
export const userContext = createContext();
function App() {
  const [user, setUser] = useState(false);
  const auth = useContext(userContext);
  const checkAuth = (u) => {
    setUser(u);
  };

  const location = useLocation();
  return (
    <div className="App">
      <userContext.Provider value={user}>
        <Routes>
          <Route path="/" element={<Layout up={checkAuth} />}>
            <Route index element={<Login up={checkAuth} />} />
            <Route path="/login" element={<Login up={checkAuth} />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/profile"
              element={
                <Proute auth={auth}>
                  <Profile />
                </Proute>
              }
            />
            <Route
              path="/data1"
              element={
                <Proute auth={auth}>
                  <Data1 />
                </Proute>
              }
            />
            <Route
              path="/data2"
              element={
                <Proute auth={auth}>
                  <Data2 />
                </Proute>
              }
            />
          </Route>
        </Routes>
      </userContext.Provider>
    </div>
  );
}

export default App;
