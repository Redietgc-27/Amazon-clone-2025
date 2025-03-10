import React from "react";
import categoryInfo from "./CategoryAllInfo";
import CategoryCards from "./CategoryCards";
import Style from "./Category.module.css";

function Category() {
  return (
    <section className={Style.category__container}>
      {categoryInfo.map((info) => (
        <CategoryCards key={info.id} info={info} />
      ))}
    </section>
  );
}

export default Category;
