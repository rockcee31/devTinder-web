import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./component/Body";
import Login from "./component/Login";   // ✅ Import Login component
import Profile from "./component/Profile"; // ✅ Import Profile component
import { Provider } from "react-redux";
import appStore from "./utils/appStore"
import Feed from "./component/Feed";
import Connections from "./component/Connections"
import Requests from "./component/Requests"
function App() {
  return (
    <Provider store={appStore}>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body />}>  {/*parent route top level route */}
          {/* ✅ Use relative paths (without `/`) for child routes nested */}
          <Route path="/" element={<Feed />} />
          <Route path="Login" element={<Login />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="connections" element={<Connections/>} />
          <Route path="requests" element={<Requests/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;  // ✅ Removed unnecessary semicolon
