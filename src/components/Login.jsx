import React,{useState} from "react";

const Login = ({onLoginSuccess}) => {

const [userName,setUserName] = useState("");
const [password,setPassword] = useState("");
const [errorMessage,setErrorMessage] = useState("");
const [successMessage,setSuccessMessage] = useState("");


const preset_user = "user";
const preset_password = "shiftplanner";

const handleSubmit = (e) => {
    e.preventDefault();

    if(userName === preset_user && password === preset_password){
        setErrorMessage("");
        setSuccessMessage("Login Successful! Redirecting to the home page...");
    setTimeout(() => {
        if(onLoginSuccess) onLoginSuccess();
    }, 1500); 

    }else {
        setSuccessMessage("");
        setErrorMessage("Invalid username or password. Try user/shiftplanner");
    }
};

return(
    <div className="login-container">
        <form className="login-card" onSubmit={handleSubmit}>
            <h2> Log In </h2>
            <p className="login-subtitle"> Use preset details: <strong>user</strong> / <strong>shiftplanner</strong></p>
            {errorMessage && <div className="error-banner">{errorMessage}</div>}
            {successMessage && <div className="success-banner">{successMessage}</div>}
            <div className="input-group">
                <label>Username:</label>
                <input type="text"
                       value={userName}
                       onChange={(e) => setUserName(e.target.value)}
                       placeholder="Enter username"
                       required
                />
            </div>
            <div className="input-group">
                <label>Password:</label>
                <input type="password"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       placeholder="Enter Password"
                       required
                />
            </div>
            <br/>
            <button type="submit" className="login-btn">Login</button>
        </form>
    </div>
);
};
export default Login;