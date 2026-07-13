import Greeting from "./Greeting";
import "../styles/Home.css";

const Home = () => {
  const name = "Lakshmi";

  return (
    <div className="home-container">
      <div className="home-card">
        <Greeting name={name} />
        <div className="home-messagebox">
          <span>Welcome to Shift Planner Application.</span>
          <br />
          <br />
          <span>Manage and plan your shifts effortlessly.</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
