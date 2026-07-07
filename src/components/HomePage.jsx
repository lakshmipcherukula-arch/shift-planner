import Greeting from "./Greeting";
import "./HomePage.css";

const HomePage = () => {

    const name = "Joe";
    
    return(
        <div className="homepage-container">   
            <div className="homepage-card">
                <Greeting name = {name}/>
                    <div className="homepage-messagebox"> 
                        <span>Welcome to Shift Planner Application.</span> 
                        <br/><br/> 
                        <span>Manage and plan your shifts effortlessly</span>
                    </div>
            </div>
        </div>
    );
}

export default HomePage;