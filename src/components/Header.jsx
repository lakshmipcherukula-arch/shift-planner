import React from "react";

const Header = () =>{
    return(
        <header className="application-header" style={{
            background: '#1a1a1a',
            color:'#fff',
            padding: '1rem 2rem',
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: '3px solid #0070f3',
            height:'60px',
            boxSizing: 'border-box'
        }}>
            <div className="logo" style={{fontSize: '1.5rem', fontWeight: 'bold'}}>
                Shift Planner
            </div>
        </header>
    );
}

export default Header;