import React, {useState} from "react";

const getGreeting = () => {
  const hour = new Date().getHours();
  
  if (hour < 12) return 'Good morning';
  if (hour < 18) return 'Good afternoon';
  return 'Good evening';
};

const Greeting = () => {

    const [greeting, setGreeting] = useState(getGreeting());
    
    return (
        <div className="greeting-container">
        <h3>{greeting}!</h3>
        </div>
    );

};

export default Greeting;
