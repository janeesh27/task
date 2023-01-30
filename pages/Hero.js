import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { select, axisBottom, axisLeft, scaleTime, scaleLinear } from 'd3';

const API_KEY = 'cfbtnp9r01qi5ik0jc60cfbtnp9r01qi5ik0jc6g';

const StockCandleGraph = ({ symbol, interval }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=${interval}&token=${API_KEY}`
      );

      setData(response.data.c);
    };

    fetchData();
  }, [symbol, interval]);

  useEffect(() => {
    if (!data || !data.length) return;
     const svg = select('svg');

    const xScale = scaleTime()
      .domain([new Date(data[0][0] * 1000), new Date(data[data.length - 1][0] * 1000)])
      .range([0, 500]);

    const yScale = scaleLinear()
      .domain([Math.min(...data.map((d) => d[3])), Math.max(...data.map((d) => d[2]))])
      .range([500, 0]);

    svg.selectAll('.candle').data(data)
      .join('rect')
        .attr('class', 'candle')
        .attr('x', (d) => xScale(new Date(d[0] * 1000)))
        .attr('y', (d) => yScale(Math.max(d[1], d[4])))
        .attr('height', (d) => Math.abs(yScale(d[1]) - yScale(d[4])))
        .attr('width', 5)
        .attr('fill', (d) => d[1] > d[4] ? 'red' : 'green');

    const xAxis = axisBottom(xScale);
    svg.select('.x-axis').style('transform', 'translateY(500px)').call(xAxis);

    const yAxis = axisLeft(yScale);
    svg.select('.y-axis').call(yAxis);
  }, [data]);

  return (
    <div className="relative h-full w-full">
      <svg className="h-full w-full" viewBox="0 0 500 500">
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </div>
  );
};

export default StockCandleGraph;
