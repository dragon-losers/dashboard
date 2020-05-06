import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["date", "facebook", "apple", "netflix", "google"],
  ["04/30/20", 204.71, 293.8, 419.85, 1346.7],
  ["05/01/20", 202.27, 289.07, 415.27, 1317.32],
  ["05/04/20", 205.26, 293.16, 428.15, 1322.9],
  ["05/05/20", 209.87, 298.65, 428.71, 1360.75],
];

export default function Stonks() {
  return (
    <Chart
      width={"auto"}
      height={"auto"}
      // backgroundColor="aliceblue"
      chartType="LineChart"
      data={data}
      options={{
        backgroundColor: "aliceblue",
        // chart: {
        title: "FANG Stock Prices",
        subtitle: "EOD April 30 - May 5",
        // },
      }}
    />
  );
}
