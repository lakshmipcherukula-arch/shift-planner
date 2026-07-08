import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import mockShifts from "./components/mock-shifts";
import HomePage from "./components/HomePage";
import Layout from "./components/Layout";
import MySchedule from "./components/MySchedule";
import FindShifts from "./components/FindShifts";
import MyProfile from "./components/MyProfile";
import Contact from "./components/Contact";

function App() {
  const [availableShifts, setavailableShifts] = useState(mockShifts);
  const [mySchedule, setMySchedule] = useState([]);

  const handleSelect = (id) => {
    const shiftToSelect = availableShifts.find((shift) => shift.id === id);

    if (shiftToSelect) {
      setavailableShifts((prevShifts) => prevShifts.filter((shift) => shift.id !== id));
      setMySchedule((prevSchedule) => [...prevSchedule, shiftToSelect]);
      alert("Shift selected successfully");
    }
  };
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/schedule" element={<MySchedule schedule={mySchedule} />} />
          <Route 
            path="/find-shifts" 
            element={
              <FindShifts 
                shifts={availableShifts} 
                onSelectShift={handleSelect} 
              />
            } 
          />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
