import React from "react";
import BlockPiopleContainer from "./BlockPiople/BlockPeopleContainer.jsx";
import "./peopls.css";

const Peopls = (props) => {
  return (
    <div className="content">
      <div className="peopls">
        <div className="filter">
          <div className="row">
            <input type="text" placeholder="поиск" />
            <button className="noBtn">поиск</button>
          </div>
        </div>

        <BlockPiopleContainer />
      </div>
    </div>
  );
};
export default Peopls;
