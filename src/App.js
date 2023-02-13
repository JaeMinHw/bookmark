import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Book from "./routes/Book";
import Modi from "./routes/Modi";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/book" element={<Book />}></Route>
        {/* <Route path="/book/:id" element={<Modi />}></Route> */}
        <Route path="/book/:userID" element={<Book />}></Route>
        <Route path="/modibook/:userID/:id" element={<Modi />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
