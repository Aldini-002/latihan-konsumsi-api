import Anime from "./pages/Anime";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="text-slate-50 mx-40 font-['Noto_Sans']">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anime" element={<Anime />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
