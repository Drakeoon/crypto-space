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
      heading: "BitCoin price",
      type: chartTypes.LINE,
      chartData: {},
    },
    {
      heading: "Ethereum price",
      type: chartTypes.LINE,
      chartData: {},
    },
    {
      heading: "Litecoin price",
      type: chartTypes.LINE,
      chartData: {},
    },
    {
      heading: "Balance",
      type: chartTypes.ADVANCED,
      chartData: {},
    },
    {
      heading: "Crypto Share",
      type: chartTypes.CIRCLE,
      chartData: {},
    },
  ];

  return (
    <div className="grid grid-cols-12 bg-gray-200 h-screen">
      <SideNav />

      <div className="col-span-8 md:w-8/12 md:mx-auto">
        {/* Main search bar */}

        <div className="flex items-center mt-4">
          <div>Search</div>

          <div className="ml-auto">Ring icon</div>
          <img src={userImage.src} alt="user" className="w-24 ml-3" />
        </div>

        {/* Tiles with charts */}
        <div className="grid grid-cols-3 grid-gap-6">
          {panes.map((pane) => (
            <Chart
              type={pane.type}
              heading={pane.heading}
              data={pane.chartData}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
