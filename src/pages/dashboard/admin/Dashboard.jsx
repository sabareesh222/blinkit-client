

import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import { FaBook, FaDollarSign, FaUsers } from "react-icons/fa";
import {
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Dashboard = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  const { data: chartData = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-stats");
      return res.data;
    },
  });

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const pieChartData = chartData.map((data) => {
    return { name: data.category, value: data.revenue };
  });

  return (
    <div className="w-full md:w-[870px] mx-auto px-4 text-gray-800">
      <h2 className="text-2xl font-semibold my-4 text-black">
        Hi, {user.displayName}
      </h2>
      {/* Stats Section */}
      <div className="stats shadow flex flex-col md:flex-row bg-white text-gray-900">
        <div className="stat bg-emerald-200">
          <div className="stat-figure text-emerald-800">
            <FaDollarSign className="text-3xl"></FaDollarSign>
          </div>
          <div className="stat-title text-black">Revenue</div>
          <div className="stat-value text-black">${stats.revenue}</div>
          <div className="stat-desc text-black">Mar 1st - Apr 1st</div>
        </div>

        <div className="stat bg-orange-200">
          <div className="stat-figure text-orange-800">
            <FaUsers className="text-3xl"></FaUsers>
          </div>
          <div className="stat-title text-black">Users</div>
          <div className="stat-value text-black">{stats.users}</div>
          <div className="stat-desc text-black">↗︎ 500 (42%)</div>
        </div>

        <div className="stat bg-indigo-200">
          <div className="stat-figure text-indigo-800">
            <FaBook className="text-3xl"></FaBook>
          </div>
          <div className="stat-title text-black">Meal kit Items</div>
          <div className="stat-value text-black">{stats.menuItems}</div>
          <div className="stat-desc text-black">↗︎ 500 (32%)</div>
        </div>

        <div className="stat bg-purple-200">
          <div className="stat-figure text-purple-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>
          <div className="stat-title text-black">Orders</div>
          <div className="stat-value text-black">{stats.orders}</div>
          <div className="stat-desc text-black">↘︎ 90 (14%)</div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="mt-16 flex flex-col sm:flex-row gap-6">
        {/* Area Chart */}
        <div className="sm:w-1/2 w-full">
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <AreaChart
                data={chartData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#8884d8"
                  fill="#d0d8f8"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="sm:w-1/2 w-full">
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieChartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

