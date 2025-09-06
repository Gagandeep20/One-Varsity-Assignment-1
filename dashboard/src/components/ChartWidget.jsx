import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function ChartWidget({ data = [] }) {
  const labels = data.map((d) => d.label);
  const values = data.map((d) => d.value);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Sales",
        data: values,
        fill: false,
        tension: 0.3,
      },
    ],
  };

  return (
    <div style={{ width: "100%", maxWidth: 900 }}>
      <Line data={chartData} />
    </div>
  );
}
