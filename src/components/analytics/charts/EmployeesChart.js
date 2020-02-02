import React, { Component } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';
import '../../../styles/analytics/analytics.css'


class EmployeesChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      employeeNumber: 3
    }
  }
  manageOwners = () => {
    let ownersUse = this.props.data.filter(d => d.sold).map(d=> d.owner)
    let ownersSet = new Set()
    let owners = this.props.data.filter(d => d.sold).map(d=> ownersSet.add(d.owner))
    let ownersArr = Array.from(ownersSet)
    let ownerObj = ownersArr.map(o => ({owner: o, count: 0}))
    for(let owner of ownersUse){
      for(let o of ownerObj){
        if(o.owner === owner){
          o.count++
        }
      }
    }
    this.setState({ data: ownerObj })
  }

  MakeDataForCharts = () => {
    let sortedArr =this.state.data.sort((a,b) => b.count- a.count).slice(0,this.state.employeeNumber)
    return sortedArr
}

handleInput = (e) => {
  const target = e.target
  const value =target.value;
  const name = target.name;
  this.setState({employeeNumber : value})
}

  componentDidMount = async () => {
    await this.manageOwners()
  }

  render() {
    return (
      <div id="employee-chart">
        <select className="select-input employee-input" name="emailUpdate" onChange={this.handleInput}  value={this.state.employeeNumber} >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
      <span className="chart-header">your Top Employees</span>
      <BarChart width={500} height={300}  data={this.MakeDataForCharts()} barSize={25} layout={"vertical"}>
      <XAxis type="number" />     
      <YAxis  dataKey="owner" type="category" width={100}/>
      <Tooltip />
      <Bar dataKey="count" fill="#a0520e" />

    </BarChart>
    </div>
    )
  }
}

export default EmployeesChart;