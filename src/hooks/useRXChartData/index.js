import { useState, useEffect } from "react";
import { interval, BehaviorSubject } from "rxjs";
import { tap } from "rxjs/operators";

const generateCryptoValueSnapshot = ({ min, max }) => {
  const value = min + Math.floor((max - min) * Math.random());

  const newSnapshot = {
    name: new Date().toISOString(),
    value,
  };

  return newSnapshot;
};

const useRXChartData = (min = 1000, max = 1500) => {
  const [chartData, setChartData] = useState({});

  const fetchInterval = interval(1000);
  const chartDataSubject = new BehaviorSubject([]);

  useEffect(() => {
    fetchInterval
      .pipe(
        tap((_) => {
          const newSnapshot = generateCryptoValueSnapshot({
            min,
            max,
          });

          const newData = [...chartDataSubject.getValue(), newSnapshot];

          if (newData.length > 30) {
            newData.splice(0, 1);
          }

          chartDataSubject.next(newData);
        })
      )
      .subscribe();

    chartDataSubject
      .pipe(
        tap((x) => {
          setChartData([...x]);
        })
      )
      .subscribe();
  }, []);

  return { min, max, chartData };
};

export default useRXChartData;
