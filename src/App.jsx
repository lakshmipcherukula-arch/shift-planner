import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import mockShifts from "./components/mock-shifts";
import Home from "./components/Home";
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
      setavailableShifts((prevShifts) =>
        prevShifts.filter((shift) => shift.id !== id),
      );
      setMySchedule((prevSchedule) => [...prevSchedule, shiftToSelect]);
      alert("Shift selected successfully");
    }
  };
  
  const handleDropShift = (id) => {
    const shiftToDrop = mySchedule.find((shift) => shift.id === id);
    if (shiftToDrop)
      setMySchedule(mySchedule.filter((shift) => shift.id !== id));

    setavailableShifts([...availableShifts, shiftToDrop]);
  };

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home/>}/>
          <Route
            path="/schedule"
            element={
              <MySchedule schedule={mySchedule} onDropShift={handleDropShift} />
            }
          />
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
