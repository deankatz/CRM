import React, { Component } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';
import '../../../styles/analytics/analytics.css'

class DateSalesChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      salesBy:"country"
    }
  }

  manageCountries = (clients, param) => {
    // // TODO: Seperate function
    
    let data = clients.map(d => ({ [param]: d[param], sold: d.sold }))
    let mySet = new Set()
    let countriesSet = data.map(d => mySet.add(d[param]))

    let countriesArr = Array.from(mySet)

    let countries = countriesArr.map(c => ({ country: c, count: 0 }))


    for (let d of data) {
      if (d.sold) {
        for (let c of countries) {
          if (d[param] === c.country) {
            c.count++
          }
        }
      }
    }

    return countries 
  }

  handleInput = (e) => {
    const target = e.target
    const value =target.value;
    this.setState({ salesBy: value})
  }
  render() {
    return (
      <div>
        <span className="chart-header" >Sales By </span>
        <select className="select-input" name="emailUpdate" onChange={this.handleInput}   >
                    <option >Country</option>
                    <option >emailType</option>
                    <option >owner</option>
                   
                </select>
        <BarChart width={700} height={300} data={this.manageCountries(this.props.data, this.state.salesBy)} >
          <XAxis dataKey="country" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#8884d8" />

        </BarChart>
      </div>
    );
  }
}

export default DateSalesChart;






