// src/pages/Dashboard.jsx
import React, { useContext } from "react";
import Card from "../components/Card";
import ChartWidget from "../components/ChartWidget";
import { DataContext } from "../context/DataContext";
import "./Dashboard.css"; // optional: page specific CSS

export default function Dashboard() {
  const { cards, chartData } = useContext(DataContext);

  return (
    <div className="dashboard-page">
      <div className="cards-row">
        <Card title="Active Users" value={cards?.activeUsers ?? "..."} />
        <Card title="Sales" value={cards?.sales ?? "..."} />
        <Card title="New Signups" value={cards?.newSignups ?? "..."} />
      </div>

      <section className="chart-section">
        <ChartWidget data={chartData} />
      </section>
    </div>
  );
}
