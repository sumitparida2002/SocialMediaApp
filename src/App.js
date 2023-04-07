import { Route, Routes } from "react-router-dom";

import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import User from "./pages/User";
import Persist from "./components/Persist";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<Login />} />

          <Route element={<Persist />}>
            <Route element={<RequireAuth />}>
              <Route index path="/" element={<Home />} />
              <Route path=":user" element={<User />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
