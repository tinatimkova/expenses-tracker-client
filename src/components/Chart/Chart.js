import React, { Component } from 'react'
import { Chart } from 'react-google-charts'
import store from '../store'

const pieOptions = {
  title: 'Percentage of each category in total expenses',
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
    const data = [['Category', 'Total'],
      ['Housing'],
      ['Shopping'],
      ['Travel&Entertainment'],
      ['Education'],
      ['Bills&Utilities'],
      ['Gifts'],
      ['Healthcare'],
      ['Food&Dining'],
      ['Transport&Auto'],
      ['Kids']
    ]
    store.categoryTotal.map((total, index) => {
      index += 1
      data[index].splice(1, 0, total)
    })
    return (
      <div>
        <Chart
          chartType='PieChart'
          data={data}
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
