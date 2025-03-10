import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import HeaderCSS from "./Header.module.css";

function LowerHeader() {
  return (
    <div className={HeaderCSS.lower__container}>
      <ul>
        <li>
          <AiOutlineMenu />
          <p>All</p>
        </li>
        <li>Today's Deals</li>
        <li>Customer Services</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}

export default LowerHeader;
