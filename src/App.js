import "./_app.scss";
import React, { useState } from "react";
import link from "./photos/Settings.svg";
import user from "./photos/Group 815.png";
import msg from "./photos/Layer2.png";
import info from "./photos/Layer2-1.png";
import set from "./photos/Layer2-2.png";
import grid from "./photos/Group 618.svg";
import grid1 from "./photos/Group 620.svg";
import grid2 from "./photos/Group 622.svg";
import grid0 from "./photos/Group 646.svg";
import grid3 from "./photos/Path 1974.svg";
import calin from "./photos/Group 856.svg";

function App() {
  const [toggle, setToggle] = useState(false);
  const handletoggle = () => {
    setToggle(!toggle);
  };
  console.log(toggle);
  return (
    <>
      <div className="container">
        <div className="container_top">
          <div className="top_left">
            <span className="toggle_btn">
              <img src={grid0} alt="" />
            </span>
            <img src={link} alt="settinglogo" width="20px" height="20px" />
            <span className="top_left_title">Settings</span>
          </div>
          <div className="top_right">
            <span>
              <img src={msg} alt="img" width="20px" height="20px" />
            </span>
            <span>
              <img src={info} alt="img" width="20px" height="20px" />
            </span>
            <span>
              <img src={set} alt="img" width="20px" height="20px" />
            </span>
            <span className="coins">50,000</span>
            <span>
              <img src={user} alt="img" width="40px" height="40px" />
            </span>
          </div>
        </div>
        <div className="container_bottom">
          <div className="sidebar open">
            <span className="first">
              <img src={grid} alt="img" width="24px" height="24px" />
            </span>
            <span>
              <img src={grid1} alt="img" />
            </span>

            <span>
              <img src={grid2} alt="img" />
            </span>

            <span>
              <img src={grid3} alt="img" />
            </span>
          </div>
          <div className="content">
            <div className="content_left">
              <div className="left_data">
                <button>
                  <h3>General</h3>
                </button>
                <button>
                  <h3>Holiday</h3>
                </button>
                <button>
                  <h3>Leave</h3>
                </button>
              </div>
            </div>
            <hr />
            <div className="content_right">
              <div className="title">
                <div className="title_heading">
                  <h1>Holiday</h1>
                </div>
                <div className="title_right">
                  <img src={calin} alt="calender" width="16px" height="16px" />
                  <div style={{ color: "#90919B" }}>Year</div>

                  <div style={{ color: "#232326" }}>2021</div>
                </div>
              </div>
              <span>
                Assign the holidays you want to give to your employees
              </span>
              <div className="section">
                <span>List(6)</span>
                <div className="section_right">
                  <div className="add_btn" onClick={handletoggle}>
                    {" "}
                    + Add new
                  </div>
                  <div> Filter</div>
                  <span>All </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={toggle ? "popup open" : "popup"}>
          <div className="popup_content">
            <div className="popup_container">
              <div className="top">
                <span>Add a new holiday</span>
                <span>x</span>
              </div>

              <div className="main_content">
                <div className="left_content">
                  <div className="left_first">
                    <span>Add</span>
                    <input type="text" />
                  </div>
                  <div className="left_second">
                    <span></span>
                    <input type="text" />
                  </div>
                  <div className="left_third">
                    <span></span>
                    <input type="text" />
                  </div>
                </div>
                <hr />
                <div className="right_content">
                  <div className="right_first">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Omnis repellendus nihil voluptatem? Lorem, ipsum dolor sit
                    amet consectetur adipisicing elit. Dicta, necessitatibus.
                  </div>
                  <div className="right_second">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Facilis doloremque architecto laboriosam itaque, odit ea
                    omnis, harum optio autem facere id hic natus officia
                    aspernatur. Beatae inventore labore quo ad nam distinctio
                    voluptates, cum animi porro obcaecati nihil? Consectetur,
                    fugiat?
                  </div>
                </div>
              </div>
              <button onClick={handletoggle}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
