import { Routes, Route } from "react-router-dom";
import Splash from "./pages/Splash";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import PostDetail from "./pages/PostDetail";
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <h1>Welcome to DIRS</h1> */}
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="login" element={<Login />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="postdetail" element={<PostDetail />} />
      </Routes>
    </div>
  );
}

export default App;
