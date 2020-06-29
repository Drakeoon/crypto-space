import React from "react";
import { SideNav, Chart } from "../shared";
import userImage from "./../../source/images/user.jpg";

const Home = () => {
  const chartTypes = {
    LINE: "LINE",
    ADVANCED: "ADVANCED",
    CIRCLE: "CIRCLE",
  };

  const panes = [
    {
      heading: "BitCoin Price",
      type: chartTypes.LINE,
    },
    {
      heading: "Ethereum Price",
      type: chartTypes.LINE,
    },
    {
      heading: "Litecoin Price",
      type: chartTypes.LINE,
    },
    {
      heading: "Balance",
      type: chartTypes.ADVANCED,
      span: 2,
    },
    {
      heading: "Crypto Share",
      type: chartTypes.CIRCLE,
    },
  ];

  return (
    <div className="grid grid-cols-12 bg-gray-200 h-screen">
      <SideNav />

      <div className="col-span-10 md:w-10/12 md:mx-auto">
        {/* Main search bar */}

        <div className="flex items-center mt-16">
          <div>Search</div>

          <div className="ml-auto">Ring icon</div>
          <img src={userImage.src} alt="user" className="w-24 ml-3" />
        </div>

        {/* Tiles with charts */}
        <div className="grid grid-cols-3 gap-8 mt-16">
          {panes.map((pane, index) => (
            <Chart
              {...(pane.span && { className: `col-span-${pane.span}` })}
              key={pane.heading}
              type={pane.type}
              heading={pane.heading}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
