import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import SingleMovie from "./Components/SingleMovie";
import Error from "./Components/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route index element={<Home />} />
        <Route path="/movies/:id" element={<SingleMovie />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
