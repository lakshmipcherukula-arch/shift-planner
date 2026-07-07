import React, { useState } from "react";
import mockShifts from './mock-shifts.js';
import './FindShifts.css';

function FindShifts() {

  const [shifts,setShifts] = useState(mockShifts);
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
            </div>

          ) )}

        </div>
    </div>
  );
  
}

export default FindShifts;
