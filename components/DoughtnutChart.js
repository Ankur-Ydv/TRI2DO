import React, { useContext, useEffect, useState } from "react";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import MyContext from "../utils/MyContext";
import axios from "axios";

ChartJS.register(Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const DoughnutChart = () => {
  const [aman, setAman] = useState([]);
  const [striver, setStriver] = useState([]);
  const [neetcode, setNeetcode] = useState([]);
  const [blind, setBlind] = useState([]);
  const [fraz, setFraz] = useState([]);
  const [love, setLove] = useState([]);
  const { user } = useContext(MyContext);

  const fetchUser = async () => {
    const res = await axios.get(`/api/user/${user}`);
    setAman(res.data.response.sheet0.solved);
    setStriver(res.data.response.sheet4.solved);
    setNeetcode(res.data.response.sheet2.solved);
    setBlind(res.data.response.sheet1.solved);
    setFraz(res.data.response.sheet5.solved);
    setLove(res.data.response.sheet3.solved);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const data = {
    labels: ["Aman ", "Striver", "NeetCode", "Blind75", "Fraz", "Love "],
    datasets: [
      {
        label: "Solved Questions",
        data: [
          aman.length,
          striver.length,
          neetcode.length,
          blind.length,
          fraz.length,
          love.length,
        ],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#63ffa9",
          "#36A2EB",
          "#dd56ff",
        ],
        hoverBackgroundColor: [
          "#f71445",
          "#36A2EB",
          "#f8b60f",
          "#0df877",
          "#FFCE56",
          "#c709f7",
        ],
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true, // Keep the legend itself
        labels: {
          usePointStyle: false, // Hide the color bars next to legend labels
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default DoughnutChart;
