import React from "react";
import "./loading.scss";
import bowl1 from "./food-icons/bowl5.png";
import bowl2 from "./food-icons/burger.png";
import bowl3 from "./food-icons/muffin.png";
import bowl4 from "./food-icons/food5.png";
import food4 from "./food-icons/toast.png";
import food1 from "./food-icons/food1.png";
import food2 from "./food-icons/food2.png";
import food3 from "./food-icons/food3.png";
import mis from "./food-icons/mis.gif";

export const Loading = ({ winningOption, moveBack }) => {
  return (
    <div class="main-wrapper">
      <div>
        <div className="back-btn" onClick={moveBack}>
          &#x2190; Back
        </div>
        <div class="orbit-container">
          <div class="center-circle">
            {/* <div className="winning-circle-wrapper"> */}
            {/* <div className="circle2 one"></div>
            <div className="circle2 two"></div>
            <div className="circle2 three"></div> */}
            <span>{winningOption}</span>
            {/* </div> */}
          </div>
          <ul class="orbit-icon-container">
            <li class="orbit-icon">
              <img src={bowl1} />
            </li>
            <li class="orbit-icon">
              <img src={bowl2} />
            </li>
            <li class="orbit-icon">
              <img src={bowl3} />
            </li>
            <li class="orbit-icon">
              <img src={bowl4} />
            </li>
            <li class="orbit-icon">
              <img src={food4} />
            </li>
            <li class="orbit-icon">
              <img src={food1} />
            </li>
            <li class="orbit-icon">
              <img src={food2} />
            </li>
            <li class="orbit-icon">
              <img src={food3} />
            </li>
            {/* <li class="orbit-icon">
            <div>
              <i class="fa-solid fa-user"></i>
              <span class="text">User Details</span>
            </div>
          </li>
          <li class="orbit-icon">
            <div>
              <i class="fa-solid fa-user"></i>
              <span class="text">User Details</span>
            </div>
          </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};
