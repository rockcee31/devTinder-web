import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./Body";
import Login from "./Login";   // ✅ Import Login component
import Profile from "./Profile"; // ✅ Import Profile component
import { Provider } from "react-redux";
import appStore from "./utils/appStore"
function App() {
  return (
    <Provider store={appStore}>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body />}>  {/*parent route top level route */}
          {/* ✅ Use relative paths (without `/`) for child routes nested */}
          <Route path="Login" element={<Login />} />
          <Route path="Profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;  // ✅ Removed unnecessary semicolon
