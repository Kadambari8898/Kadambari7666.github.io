import React from "react";
import "./About.css";
import logo from '../../images/kadu1.jfif';

export default function About(){
    return(
        <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={logo}
            alt={"logo"}
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I'm a Frontend developer. I had used and work on many frontend technlogies. such like React .js, Jquery many more.
        </p>
        <p className="a-desc">
          My Interest <br></br>
          → I'm always interested to make new friends.<br></br>
          → listeening music.<br></br>
          → visit new places.<br></br>
          → Swimming.
        </p>
        {/* <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div> */}
      </div>
    </div>
    )
}