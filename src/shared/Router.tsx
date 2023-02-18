import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/main/Main";
import Join from "../pages/join/Join";
import Meet from "../pages/meet/Meet";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/meet/:roomId" element={<Meet />} />
      <Route path="/join/:roomId" element={<Join />} />
      <Route path="*" element={<Main />} />
    </Routes>
  );
};

export default Router;
