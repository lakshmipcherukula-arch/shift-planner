import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Layout from "./components/Layout";
import MySchedule from "./components/MySchedule";
import FindShifts from "./components/FindShifts";
import MyProfile from "./components/MyProfile";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/schedule" element={<MySchedule />} />
          <Route path="/find-shifts" element={<FindShifts />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
