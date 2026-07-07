import React, { useState } from "react";
import mockShifts from './mock-shifts.js';
import './FindShifts.css';

function FindShifts() {

  const [shifts,setShifts] = useState(mockShifts);

  const handleClaimShift = (id) => {
    const updatedShifts = shifts.filter((shift) => shift.id !== id);
    setShifts(updatedShifts);
  alert('shift added successfully!');
  };

  return (
    <div className="findshifts-container">
      <h2> Available Shifts</h2>
        <div className="shifts-list">
          {shifts.map((shift) => (
            <div key={shift.id} className="shift-card">
              <p><strong> Date: </strong>{shift.date}</p>
              <p><strong>Start Time:</strong> {shift.startTime}</p>
              <p><strong>End Time:</strong>{shift.endTime}</p>
              <p><strong>Hours:</strong>{shift.hours}</p>
              <button onClick={() =>handleClaimShift(shift.id)}
                style={{
                  backgroundColor: "#0070f3",
                  color: "#fff",
                  border: "none",
                  padding: "0.5rem 1rem",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontWeight: "bold"
                }}> Select Shift</button>
            </div>

          ) )}

        </div>
    </div>
  );
  
}

export default FindShifts;
