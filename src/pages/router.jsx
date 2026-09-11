import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home/Home";
import Login from "./Login/LoginPage";
import NotFound from "./NotFound/NotFound";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;