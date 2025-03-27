import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./Body";
import Login from "./Login";   // ✅ Import Login component
import Profile from "./Profile"; // ✅ Import Profile component

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body />}>
          {/* ✅ Use relative paths (without `/`) for child routes */}
          <Route path="Login" element={<Login />} />
          <Route path="Profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;  // ✅ Removed unnecessary semicolon
