import React from "react";

const TopFlex = ({ list, _body }) => {
  return (
    <div className="smart-contracts-flex">
      <aside className="smart-contracts-flex-title">{_body}</aside>
      <div className="flex-start  smart-contracts-flex-list">{list}</div>
    </div>
  );
};

export default TopFlex;