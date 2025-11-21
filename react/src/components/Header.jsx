import React from "react";

const Header = ({ name }) => {
  let n1 = name;
  n1 = `${name} is not a good boy`;
  return <div className="header">{n1}</div>;
};

export default Header;
