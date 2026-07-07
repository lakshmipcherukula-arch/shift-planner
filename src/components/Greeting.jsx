import React, {useState, useEffect} from "react";

const getGreeting = () => {
  const hour = new Date().getHours();
  
  if (hour < 12) return 'Good morning';
  if (hour < 18) return 'Good afternoon';
  return 'Good evening';
};

const Greeting = (props) => {

    const [greeting, setGreeting] = useState(getGreeting());
    
    useEffect(() => {
        // Update the greeting every minute in case the time changes while they are on the page
        const interval = setInterval(() => {
        setGreeting(getGreeting());
        }, 60000); 

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="greeting-container">
        <h3>{greeting}, {props.name}!</h3>
        </div>
    );

};

export default Greeting;
