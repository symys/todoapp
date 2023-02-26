import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoPage from "./TodoPage";
import WelcomePage from "./WelcomePage";
import LoginPage from "./LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />}/>
        <Route path="/todo" element={<TodoPage />}/>
        <Route path="/login" element={<LoginPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
