import React,{useState} from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/calendar.css";

function MySchedule({ schedule, onDropShift }) {
  const selectedShifts = Array.isArray(schedule) ? schedule : [];

  const [selectedDate, setSelectedDate] = useState(new Date());
  const formatCalendarDate = (dateObj) => {
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const formattedDateString = formatCalendarDate(selectedDate);

  const displayedShifts = selectedShifts.filter(
    (shift) => shift.date === formattedDateString
  );

  return (
    <div className="myschedule-container" style={{ padding: "1rem" }}>
      <h2>My Schedule (Calendar View)</h2>

      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <Calendar 
          onChange={setSelectedDate} 
          value={selectedDate} 
        />
      </div>

      <div className="shifts-section">
        <h3>Shifts for {formattedDateString}:</h3>

        {displayedShifts.length === 0 ? (
          <p>No shifts scheduled for this day.</p>
        ) : (
          displayedShifts.map((shift) => (
            <div 
              key={shift.id} 
              style={{ 
                borderLeft: "5px solid #0070f3", 
                padding: "12px", 
                margin: "10px 0", 
                background: "white", 
                borderRadius: "4px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
              }}
            >
              <p style={{ margin: "4px 0" }}><strong>Time:</strong> {shift.startTime} - {shift.endTime}</p>
              <p style={{ margin: "4px 0" }}><strong>Hours:</strong> {shift.hours} hrs</p>
              <button 
                onClick={() => onDropShift(shift.id)}
                style={{ backgroundColor: "red", color: "white", border: "none", padding: "5px 10px", borderRadius: "4px", cursor: "pointer", marginTop: "5px" }}
              >
                Drop Shift
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MySchedule;
