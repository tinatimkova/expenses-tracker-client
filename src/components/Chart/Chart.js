import React, { Component } from 'react'
import { Chart } from 'react-google-charts'
import store from '../store'

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
  backgroundColor: '#ffcba4',
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
    left: 100,
    top: 20,
    width: '800px',
    height: '800px'
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
      ['Shopping'],
      ['Travel & Entertainment'],
      ['Education'],
      ['Bills & Utilities'],
      ['Gifts'],
      ['Healthcare'],
      ['Food & Dining'],
      ['Transport & Auto'],
      ['Kids']
    ]
    store.categoryTotal.map((total, index) => {
      index += 1
      data[index].splice(1, 0, total)
    })
    return (
      <div>
        <h4 className='chart-title'>Percentages By Category</h4>
        <Chart
          chartType='PieChart'
          data={data}
          options={pieOptions}
          graph_id='PieChart'
          width={'100%'}
          height={'500px'}
          legend_toggle
        />
      </div>
    )
  }
}

export default CategoryChart
