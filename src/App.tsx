import NotFound from "./pages/NotFound";
import Users from "./pages/Users";

import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";

import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="users" element={<Users />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
