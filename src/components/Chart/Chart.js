import React, { Component } from 'react'
import { Chart } from 'react-google-charts'

const pieOptions = {
  title: 'Percentage of each category in total expenses',
  // pieHole: 0.8,
  slices: [
    {
      color: '#2BB673'
    },
    {
      color: '#d91e48'
    },
    {
      color: '#007fad'
    },
    {
      color: '#e9a227'
    }
  ],
  legend: {
    position: 'bottom',
    alignment: 'bottom',
    textStyle: {
      color: '233238',
      fontSize: 14
    }
  },
  tooltip: {
    showColorCode: true
  },
  chartArea: {
    left: 0,
    top: 0,
    width: '100%',
    height: '80%'
  },
  fontName: 'Roboto'
}

class CategoryChart extends Component {
  state = {
    chartImageURI: ''
  }

  render () {
    return (
      <div>
        <Chart
          chartType='PieChart'
          data={[['Category', 'Total'],
            ['Housing', 1800],
            ['Shopping', 2],
            ['Travel&Entertainment', 500],
            ['Education', 0],
            ['Bills&Utilities', 500],
            ['Gifts', 500],
            ['Healthcare', 200],
            ['Food&Dining', 800],
            ['Transport&Auto', 200],
            ['Kids', 500]]}
          oprions={pieOptions}
          graph_id='PieChart'
          width={'100%'}
          height={'400px'}
          legend_toggle
        />
      </div>
    )
  }
}

export default CategoryChart
