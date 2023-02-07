import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoPage from "./components/TodoPage";
import WelcomePage from "./components/WelcomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />}/>
        <Route path="/todo" element={<TodoPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
