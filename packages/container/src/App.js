import React from "react";
import { mount } from "marketing/Marketing";
import MarketingApp from "./components/MarketingApp";

console.log(mount);
export default () => {
  return (
    <div>
      <h1>Hi there!!!!</h1>
      <hr />
      <MarketingApp />
    </div>
  );
};
