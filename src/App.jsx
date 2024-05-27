import React, { useState } from "react";
import { Table, Button, Typography } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "./index.css"; 

const { Title } = Typography;

const data = [
  {
    rank: 1,
    name: "Based on premium and",
    calmarRatio: 0.84,
    overallProfit: 132767.1,
    avgDailyProfit: 108.38,
    winPercentDay: 0.6,
    price: "-",
    action: "View",
  },
  {
    rank: 2,
    name: "strategy_name",
    calmarRatio: 0.69,
    overallProfit: 208500.31,
    avgDailyProfit: 140.5,
    winPercentDay: 0.35,
    price: "-",
    action: "View",
  },
  {
    rank: 3,
    name: "Wait and trade_Save",
    calmarRatio: 0.67,
    overallProfit: 70823.17,
    avgDailyProfit: 64.33,
    winPercentDay: 0.6,
    price: "-",
    action: "View",
  },
  {
    rank: 4,
    name: "iron condor",
    calmarRatio: 0.64,
    overallProfit: 88978.5,
    avgDailyProfit: 69.35,
    winPercentDay: 0.62,
    price: "-",
    action: "View",
  },
  {
    rank: 5,
    name: "strategy_name",
    calmarRatio: 0.59,
    overallProfit: 157335.75,
    avgDailyProfit: 128.75,
    winPercentDay: 0.62,
    price: "-",
    action: "View",
  },
  {
    rank: 6,
    name: "strategy_name",
    calmarRatio: 0.59,
    overallProfit: 157335.75,
    avgDailyProfit: 128.75,
    winPercentDay: 0.62,
    price: "-",
    action: "View",
  },
  {
    rank: 7,
    name: "Based on premium wit",
    calmarRatio: 0.57,
    overallProfit: 63852.65,
    avgDailyProfit: 87.23,
    winPercentDay: 0.48,
    price: "-",
    action: "View",
  },
  {
    rank: 8,
    name: "strategy_name",
    calmarRatio: 0.53,
    overallProfit: 194687.52,
    avgDailyProfit: 131.19,
    winPercentDay: 0.35,
    price: "-",
    action: "View",
  },
  {
    rank: 9,
    name: "strategy_name",
    calmarRatio: 0.44,
    overallProfit: 74852.97,
    avgDailyProfit: 60.22,
    winPercentDay: 0.57,
    price: 500,
    action: "Buy",
  },
  {
    rank: 10,
    name: "Selling with re entr",
    calmarRatio: 0.31,
    overallProfit: 127095.7,
    avgDailyProfit: 106.36,
    winPercentDay: 0.61,
    price: "-",
    action: "View",
  },
];

const StrategyTable = () => {
  const [sortedInfo, setSortedInfo] = useState({});

  const handleChange = (pagination, filters, sorter) => {
    setSortedInfo(sorter);
  };

  const columns = [
    {
      title: "Rank",
      dataIndex: "rank",
      key: "rank",
      className: "custom-ant-table-cell",
      sorter: (a, b) => a.rank - b.rank,
      sortOrder: sortedInfo.columnKey === "rank" && sortedInfo.order,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      className: "custom-ant-table-cell",
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order,
    },
    {
      title: "Calmar Ratio",
      dataIndex: "calmarRatio",
      key: "calmarRatio",
      className: "custom-ant-table-cell",
      sorter: (a, b) => a.calmarRatio - b.calmarRatio,
      sortOrder: sortedInfo.columnKey === "calmarRatio" && sortedInfo.order,
    },
    {
      title: "Overall Profit",
      dataIndex: "overallProfit",
      key: "overallProfit",
      className: "custom-ant-table-cell",
      sorter: (a, b) => a.overallProfit - b.overallProfit,
      sortOrder: sortedInfo.columnKey === "overallProfit" && sortedInfo.order,
    },
    {
      title: "Avg. Daily Profit",
      dataIndex: "avgDailyProfit",
      key: "avgDailyProfit",
      className: "custom-ant-table-cell",
      sorter: (a, b) => a.avgDailyProfit - b.avgDailyProfit,
      sortOrder: sortedInfo.columnKey === "avgDailyProfit" && sortedInfo.order,
    },
    {
      title: "Win % (Day)",
      dataIndex: "winPercentDay",
      key: "winPercentDay",
      className: "custom-ant-table-cell",
      sorter: (a, b) => a.winPercentDay - b.winPercentDay,
      sortOrder: sortedInfo.columnKey === "winPercentDay" && sortedInfo.order,
    },
    {
      title: "Price (Rs)",
      dataIndex: "price",
      key: "price",
      className: "custom-ant-table-cell",
      sorter: (a, b) => a.price - b.price,
      sortOrder: sortedInfo.columnKey === "price" && sortedInfo.order,
    },
    {
      title: "Action",
      key: "action",
      className: "custom-ant-table-cell",
      render: (text, record) =>
        record.price !== "-" ? (
          <Button
            type="primary"
            icon={<ShoppingCartOutlined />}
            className="custom-ant-btn custom-ant-btn-primary"
          >
            Buy
          </Button>
        ) : (
          <Button icon={<EyeOutlined />} className="custom-ant-btn">
            View
          </Button>
        ),
    },
  ];

  return (
    <div
      style={{
        padding: "10px",
        backgroundColor: "#f5f5f5",
        textAlign: "center",
      }}
    >
      <Title level={1} style={{ textAlign: "center", marginBottom: "10px" }}>
        LeaderBoards
      </Title>
      <Title level={3} style={{ textAlign: "left", marginBottom: "10px" }}>
        Basic Backtest
      </Title>
      <Table
        columns={columns}
        dataSource={data}
        onChange={handleChange}
        pagination={false}
        bordered
        className="custom-ant-table"
      />
    </div>
  );
};

export default StrategyTable;






