import React from "react";
import Simmer from "./Simmer";
import SkeletonElement from "./SkeletonElement";

const SkeletonArticle = ({ theme }) => {
  const themeClass = theme || "light";

  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
      <div className="skeleton-article">
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
      </div>
      <Simmer />
    </div>
  );
};

export default SkeletonArticle;
