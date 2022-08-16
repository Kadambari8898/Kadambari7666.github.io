import React from "react";
import Typical from "react-typical";
import "./Navbar.css";

export default function Navbar()
{
    return(
        <div className="profile-container">
        <div className="profile-parent">
            <div className="profile-details">
                <div className="colz">
                    <div className="colz-icon">

                    <a href="/#">
                        <i className="fa fa-instagram" ></i>
                    </a>
                    <a href="/#">
                        <i className="fa fa-facebook-square"></i>
                    </a>
                    <a href="/#">
                        <i className="fa fa-google-plus-square" ></i>
                    </a>
                    <a href="/#">
                        <i className="fa fa-linkedin-square" ></i>
                    </a>
                    <a href="/#">
                        <i className="fa fa-github-square" ></i>
                    </a>
                    </div>
                    
                </div>
                <div className="profile-details-name">
                    <span className="primary-text">
                    {" "}
                        Hello, I'M <br></br><span className="highlighted-text">Kadambari Shendge</span>
                    </span>
                </div>
                <div className="profile-details-role">
                    <span className="primary-text">
                        {" "}
                        <h1>
                            {" "}
                            <Typical
                                loop={Infinity}
                                steps={[
                                    "Data Science Enth..",
                                    1000,
                                    "Php Devoloper",
                                    1000,
                                    "React Devoloper",
                                    1000,
                                ]}
                            />
                        </h1>
                        <span className="profile-role-tagline">
                        Build the applications with using frontend and backend technologies.<br></br>Also Having Knowledge about Data science related field.
                        </span>
                    </span>
                    
                </div>
                <div className="profile-options">
                    <button className="btn primary-btn">
                        {""}
                        Hire me
                        {" "}
                    </button>
                    <a href="Resume.pdf" download={'Resume.pdf'}>
                    <button className="btn highlighted-btn">Get Resume</button>
                    </a>
                </div>
            </div>
            <div className="profile-picture">
                <div className="profile-picture-background">

                </div>
            </div>
        </div>
    </div>

    )
}
