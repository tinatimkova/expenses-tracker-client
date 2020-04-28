import React, { Component } from 'react'
import { Chart } from 'react-google-charts'
import store from '../store'
import RecommendedBudget from '../RecommendedBudget/RecommendedBudget'

const pieOptions = {
  is3D: true,
  slices: [
    {
      color: '#003f5c'
    },
    {
      color: '#2f4b7c'
    },
    {
      color: '#665191'
    },
    {
      color: '#a05195'
    },
    {
      color: '#d45087'
    },
    {
      color: '#f95d6a'
    },
    {
      color: '#ff7c43'
    },
    {
      color: '#ffa600'
    },
    {
      color: '#a05195'
    },
    {
      color: '#a05195'
    }
  ],
  backgroundColor: {
    stroke: '#4322c0',
    strokeWidth: 4
  },
  legend: {
    position: 'right',
    alignment: 'center',
    textStyle: {
      color: '233238',
      fontSize: 18
    }
  },
  tooltip: {
    showColorCode: true
  },
  chartArea: {
    left: 80,
    top: 60,
    width: '700px',
    height: '600px'
  },
  fontName: 'Roboto'
}

class CategoryChart extends Component {
  state = {
    chartImageURI: ''
  }

  render () {
    const data = [['Category', 'Total'],
      ['Housing'],
      ['Food & Dining'],
      ['Shopping'],
      ['Travel & Entertainment'],
      ['Transport & Auto'],
      ['Education'],
      ['Bills & Utilities'],
      ['Gifts'],
      ['Healthcare'],
      ['Kids']
    ]
    store.categoryTotal.map((total, index) => {
      index += 1
      data[index].splice(1, 0, total)
    })
    return (
      <div className='chart'>
        <h4 className='chart-title'>Budget Percentages By Category</h4>
        <Chart
          chartType='PieChart'
          loader={<div>Loading Chart</div>}
          data={data}
          options={pieOptions}
          graph_id='PieChart'
          width={'700px'}
          height={'400px'}
          legend_toggle
        />
        <div>
          <RecommendedBudget total={data} />
        </div>
      </div>
    )
  }
}

export default CategoryChart
