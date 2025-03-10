import React from "react";
import Style from "./Category.module.css";
import { Link } from "react-router-dom";

function CategoryCards({ info }) {
  return (
    <div className={Style.category}>
      <Link to={`/category/${info.name}`}>
        <h3>{info.title}</h3>

        <img src={info.image} alt="" />
        <p>Shop Now</p>
      </Link>
    </div>
  );
}

export default CategoryCards;
