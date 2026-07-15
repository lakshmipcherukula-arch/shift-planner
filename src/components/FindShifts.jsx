import React, { useState } from "react";
import "../styles/FindShifts.css";
import Button from "./Button";

function FindShifts({ shifts, onSelectShift }) {
  const formatShiftDate = (dateString) => {
    if (!dateString) return "";
    const dateObj = new Date(dateString + "T00:00:00");
    return dateObj.toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="findshifts-container">
      <h2> Available Shifts</h2>
      {shifts.length === 0 ? (
        <p style={{ textAlign: "center", color:"gray" }}>
          No shifts available.
        </p>
      ) : (
        <div className="shifts-list">
          {shifts.map((shift) => (
            <div key={shift.id} className="shift-card">
              <h3
                className="shift-card-date"
                style={{ color: "blue", margin: "0 0 10px 0" }}
              >
                {formatShiftDate(shift.date)}
              </h3>
              <p>
                <strong>Start Time:</strong> {shift.startTime}
              </p>
              <p>
                <strong>End Time:</strong>
                {shift.endTime}
              </p>
              <p>
                <strong>Hours:</strong>
                {shift.hours}
              </p>
              {/* <button
                onClick={() => onSelectShift(shift.id)}
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  border: "none",
                  padding: "0.5rem 1rem",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                {" "}
                Select Shift
              </button> */}
              <Button 
                type="submit" 
                className="login-btn" 
                onClick={() => onSelectShift(shift.id)}
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  border: "none",
                  padding: "0.5rem 1rem",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                {" "}
                Select Shift
              </Button>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FindShifts;
