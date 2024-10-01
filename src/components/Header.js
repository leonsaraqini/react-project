import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";


const Header = () => {
    const [btnName, setBtnName] = useState("Log In");
    

    //if no dependency array => useEffect is called on every render
    //if dependency array is empty = [] => useEffect is called on initial render
    //if dependency array is not empty then 
    useEffect(() => {
        console.log("test");    
    }, [btnName]);
    
    return (
        <div className="header">
            
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>

            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={() => {
                        btnName == "Log In" ? 
                        setBtnName("Log Out") : 
                        setBtnName("Log In");
                    }}>{btnName}</button>
                </ul>
            </div>

        </div>
    )
}

export default Header;