import React from "react";

function MySchedule({ schedule }) {
  const selectedShifts = Array.isArray(schedule) ? schedule : [];

  return (
    <div className="myschedule-container" style={{ padding: "1rem" }}>
      <h2>My Schedule</h2>

      {selectedShifts.length === 0 ? (
        <p style={{ color: "#666" }}>You haven't selected any shifts yet.</p>
      ) : (
        <div className="shifts-list">
          <p style={{ color: "#0070f3", fontWeight: "bold" }}>
            You have {selectedShifts.length} shift{selectedShifts.length === 1 ? "" : "s"} selected.
          </p>
          {selectedShifts.map((shift) => (
            <div
              key={shift.id}
              className="shift-card"
              //style={{ border: "1px solid #0070f3", padding: "1rem", marginBottom: "1rem", backgroundColor: "#f0f7ff" }}
            >
              <p><strong>Date:</strong> {shift.date}</p>
              <p><strong>Start Time:</strong> {shift.startTime}</p>
              <p><strong>End Time:</strong> {shift.endTime}</p>
              <p><strong>Hours:</strong> {shift.hours}</p>
              <span style={{ color: "#0070f3", fontWeight: "bold" }}>Selected</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MySchedule;
