import React, { Component } from "react"
import ReactEcharts from "echarts-for-react"

class Doughnut extends Component {
  getOption = () => {
    return {
      toolbox: {
        show: false,
      },
      tooltip: {
        trigger: "item",
        formatter: "{b}: {d}%",
      },
      legend: {
        orient: "vertical",
        x: "left",
        data: ["BTC", "ETH", "USDT", "AVAX", "LINK"],
        textStyle: {
          color: ["#74788d"],
        }
      },
      color: ["#556ee6", "#f1b44c", "#f46a6a", "#50a5f1", "#34c38f"],
      series: [
        {
          name: "Allocations",
          type: "pie",
          radius: ["50%", "70%"],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: "center",
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: "30",
                fontWeight: "bold",
              },
            },
          },
          labelLine: {
            normal: {
              show: false,
            },
          },
          data: [
            { value: 45, name: "BTC" },
            { value: 20, name: "ETH" },
            { value: 15, name: "USDT" },
            { value: 10, name: "AVAX" },
            { value: 10, name: "LINK" },
          ],
        },
      ],
    }
  }
  render() {
    return (
      <React.Fragment>
        <ReactEcharts style={{ height: "350px" }} option={this.getOption()} />
      </React.Fragment>
      
    )
  }
}
export default Doughnut
