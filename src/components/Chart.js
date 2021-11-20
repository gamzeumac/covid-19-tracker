import React from 'react';
import {  Bar } from "react-chartjs-2";
import "./Main/style.css";


function Chart({ fetchdata, country, countryInfo }) {
  const barChart = country=== 'worldwide'  ? (
    <Bar
      data={{
        labels: ["Deaths", "Recovered", "Infected", "Active"],
        datasets: [
          {
            label: "Worldwide",
            backgroundColor: [
              "rgb(239, 154, 154)",
              "rgb(121, 134, 203)",
              "rgb(255, 204, 128)",
              "rgb(255, 245, 157)",
            ],
            hoverBackgroundColor: [
              "rgb(244, 67, 54)",
              "rgb(63, 81, 181)",
              "rgb(255, 152, 0)",
              "rgb(255, 235, 59)",
            ],
            data: [
              fetchdata?.deaths?.value,
              fetchdata?.recovered?.value,
              fetchdata?.confirmed?.value,
              fetchdata?.confirmed?.value - (fetchdata?.recovered?.value + fetchdata?.deaths?.value),
            ],
          },
        ],
      }}
    />
  ) : (
    <Bar
    data={{
      labels: ["Deaths", "Recovered", "Infected", "Active"],
      datasets: [
        {
          label: country,
          backgroundColor: [
            "rgb(239, 154, 154)",
            "rgb(121, 134, 203)",
            "rgb(255, 204, 128)",
            "rgb(255, 245, 157)",
          ],
          hoverBackgroundColor: [
            "rgb(244, 67, 54)",
            "rgb(63, 81, 181)",
            "rgb(255, 152, 0)",
            "rgb(255, 235, 59)",
          ],
          data: [
            countryInfo?.deaths?.value,
            countryInfo?.recovered?.value,
            countryInfo?.confirmed?.value,
            countryInfo?.confirmed?.value - (countryInfo?.recovered?.value + countryInfo?.deaths?.value),
          ],
        },
      ],
    }}
  />

  );

  return (
    <div className="container">{barChart}</div>
  );
};

export default Chart;
