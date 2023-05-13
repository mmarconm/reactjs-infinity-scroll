import NotFound from "./pages/NotFound";
import Users from "./pages/Users";

import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";

import Login from "./pages/Login";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <Routes>
      
      <Route path="login" element={<Login />} />
      
      {/* private routes */}
      <Route path="/" element={<PrivateRoute />}>
        <Route element={<Layout />}>
          <Route path="users" element={<Users />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>

    // <Routes>
    //   <Route path="login" element={<Login />} />
    //   <Route path="/" element={<Layout />}>
    //     <Route path="users" element={<Users />} />
    //   </Route>
    //   <Route path="*" element={<NotFound />} />
    // </Routes>
  );
}

export default App;
