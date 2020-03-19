import React, { Component } from 'react'
import CanvasJSReact from './canvasjs.react'

// const CanvasJS = CanvasJSReact.CanvasJS
const CanvasJSChart = CanvasJSReact.CanvasJSChart

class Chart extends Component {
  render () {
    const options = {
      theme: 'dark2',
      animationEnabled: true,
      exportFileName: 'Expenses by categories',
      exportEnabled: true,
      title: {
        text: 'All Expenses By Categories'
      },
      data: [{
        type: 'pie',
        showInLegend: true,
        legendText: '{label}',
        toolTipContent: '{label}: <strong>{y}%</strong>',
        indexLabel: '{y}%',
        indexLabelPlacement: 'inside',
        dataPoints: [
          { y: 32, label: 'Housing' },
          { y: 22, label: 'Shopping' },
          { y: 15, label: 'Education' },
          { y: 19, label: '' },
          { y: 5, label: '' },
          { y: 7, label: '' }
        ]
      }]
    }
    return (
      <div>
        <CanvasJSChart options = {options}
        /* onRef={ref => this.chart = ref} */
        />
      </div>
    )
  }
}

export default Chart
