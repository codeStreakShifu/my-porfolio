import React from "react";
import { Header } from "../common/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const About = () => <h1>About Page</h1>;
const Users = () => <h1>Users Page</h1>;

export const Pages = () => {
  return (
    <BrowserRouter>
      <Header />
      {/* Using Routes and Route as expected in v7 */}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
};
