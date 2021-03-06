import React from "react";
import "./_comp.scss";
import { BiPencil } from "react-icons/bi";
import { FiTrash } from "react-icons/fi";

const Comp = ({ name, date, opt }) => {
  return (
    <div className="data_content">
      <div className="data_content_left">
        <span className="data_content_left_dataL">
          <h4 style={{ color: "#151B30" }}>{name}</h4>
        </span>
        <span className="data_content_left_dataR">
          <h4 style={{ color: "#585A64" }}>{opt}</h4>
        </span>
      </div>
      <div className="data_content_right" style={{ marginRight: "15px" }}>
        <span className="data_content_right_dataL">
          <h4>{date}</h4>
        </span>
        <span className="data_content_right_dataR">
          <BiPencil style={{ fontColor: "grey" }} />
        </span>
        <span className="data_content_right_dataR">
          <FiTrash style={{ fontColor: "grey" }} />
        </span>
      </div>
    </div>
  );
};

export default Comp;
