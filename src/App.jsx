import { BrowserRouter, Route, Routes } from "react-router-dom";

// import pages as components
import Home from "./pages/Home.jsx";
import Credits from "./pages/Credits.jsx";
import Form from './pages/Form.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
