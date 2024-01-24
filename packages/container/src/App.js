import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { mount } from "marketing/Marketing";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";

console.log(mount);
export default () => {
  return (
    <BrowserRouter>
      <Header />
      <MarketingApp />
    </BrowserRouter>
  );
};
