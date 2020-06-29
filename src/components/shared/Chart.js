import React, { useRef } from "react";
import { ResponsiveContainer, LineChart, Line, YAxis } from "recharts";
import { useResize, useRXChartData } from "../../hooks";

export const Chart = ({ className, heading }) => {
  const ref = useRef({ clientWidth: null });
  const resizeClass = useResize(ref.current);
  const { min, max, chartData } = useRXChartData(1000, 1400);

  return (
    <div
      ref={ref}
      className={`bg-white p-10 ${className} ${resizeClass}`}
      style={{ borderRadius: "24px" }}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-medium" style={{ color: "#1a1152" }}>
          {heading}
        </h2>

        <button
          style={{
            color: "white",
            width: "72px",
            height: "35px",
            borderRadius: "8px",
            boxShadow: "0 8px 25px -8px rgba(70, 188, 194, 0.73)",
            backgroundColor: "#46bcc2",
            fontSize: 14,
            fontWeight: "500",
          }}
        >
          Active
        </button>
      </div>

      <div className="grid items-end mt-8 grid-cols-3">
        <div className="col-span-2 text-5xl font-bold">$12400</div>

        <ResponsiveContainer width="100%" height={80} className="mt-12">
          <LineChart
            data={chartData}
            margin={{ top: 0, left: 0, right: 5, bottom: 0 }}
          >
            <YAxis type="number" domain={[min - 100, max + 100]} hide={true} />

            <Line
              isAnimationActive={false}
              type="basis"
              dataKey="value"
              stroke="#a1cd3d"
              dot={false}
              strokeWidth={5}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <p className="text-gray-600 text-sm">
        Data gets fetched every 30 seconds
      </p>
    </div>
  );
};
