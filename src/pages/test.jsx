import { useState } from "react";
import { Data } from "./Data";
import "./styles.css";
import { useDispatch, useSelector } from 'react-redux';
import PieChart from "../components/PieChart";

export default function App() {
    // utils/Data.js
    
    
    // const {FLIGHT} = useSelector((state) => state.FlightReducer)
    const Data = [
        {
          label: "Flight",
          data: 2016,
        },
        {
            label: "Flight",
            data: 2016,
        },
        {
            label: "Flight",
            data: 2016,
        },
        {
            label: "Flight",
            data: 2016,
        },
        {
            label: "Flight",
            data: 2016,
        }
      ];
    
      const data = {
        labels: ['Red', 'Orange', 'Blue'],
        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
        datasets: [
            {
              label: 'Popularity of colours',
              data: [55, 23, 96],
              // you can set indiviual colors for each bar
              backgroundColor: [
                'rgba(255, 255, 255, 0.6)',
                'rgba(255, 255, 255, 0.6)',
                'rgba(255, 255, 255, 0.6)',
              ],
              borderWidth: 1,
            }
        ]
    }
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.label), 
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.data),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });

  return (
    <div className="App">
      <PieChart chartData={chartData} />
    </div>
  );
}