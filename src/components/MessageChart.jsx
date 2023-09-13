import React from 'react';
import ReactApexChart from 'react-apexcharts';

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: 'Delivered Messages',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
        {
          name: 'Unsuccessful Messages',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth', // You can use 'smooth' for smoother lines
        },
        title: {
          text: 'Message Statistics',
          align: 'left',
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'],
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: [1, 2, 3, 4, 5, 6, 7, 8, 9], // Replace with your desired numbers
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={300} />
      </div>
    );
  }
}

export default ApexChart;
