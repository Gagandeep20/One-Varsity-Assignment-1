import React, { createContext, useState, useEffect } from "react";
import api from "../services/api";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [cards, setCards] = useState(null);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    async function fetchAll() {
      try {
        const [cardsRes, chartRes] = await Promise.all([
          api.get("/cards"),
          api.get("/dashboardData"),
        ]);
        setCards(cardsRes.data);
        setChartData(chartRes.data);
      } catch (err) {
        console.error("fetch error", err);
      }
    }
    fetchAll();
  }, []);

  return (
    <DataContext.Provider value={{ cards, chartData }}>
      {children}
    </DataContext.Provider>
  );
}
