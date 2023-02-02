import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Book from "./routes/Book";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/main" element={<Book />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
