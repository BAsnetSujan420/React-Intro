import React from "react";
import Simmer from "./Simmer";
import SkeletonElement from "./SkeletonElement";

const SkeletonProfile = ({ theme }) => {
  const themeClass = theme || "light";
  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
      <div className="skeleton-profile">
        <div>
          <SkeletonElement type="avatar" />
        </div>
        <div>
          <SkeletonElement type="title" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
        </div>
        <Simmer />
      </div>
    </div>
  );
};

export default SkeletonProfile;
