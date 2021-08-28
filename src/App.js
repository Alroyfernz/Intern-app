import "./_app.scss";
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

function App() {
  return (
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
          <div className="content_right"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
