import React, { Component } from 'react';
import data from '../../data.json'
import Rows from './Rows';
import TableHeader from './TableHeader';
import Inputs from './Inputs';
import axios from 'axios';
import PopUp from './Popup';


class Table extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      search: "",
      dropDown: "name",
      clientsNumber: 20

    }
  }
  getData = async () => {
    let data = await axios.get("http://localhost:8080/clients")
    return data
  }
  componentDidMount = async () => {
  let data =  await this.getData()
   this.setState({ data: data.data})


  }

  handleInput = (e) => {
    const target = e.target
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value })
  }

  nextPage = () => {
    let clientNumber = this.state.clientsNumber
    clientNumber += 20
    this.setState({ clientsNumber: clientNumber })
  }
  lastPage = () => {
    if (this.state.clientsNumber - 20 <= 0) {
      return
    }
    let clientNumber = this.state.clientsNumber
    clientNumber -= 20
    this.setState({ clientsNumber: clientNumber })
  }


  render() {
    let data = this.state.data.filter(m => m[this.state.dropDown].includes(this.state.search))
    console.log(this.state.data.slice(this.state.clientsNumbe - 20, this.state.clientsNumber))

    return (
      <div>
        <Inputs handleInput={this.handleInput} clientsNumber={this.state.clientsNumber} nextPage={this.nextPage}
          lastPage={this.lastPage} />
        <TableHeader />

        {this.state.search === "" ?
          this.state.data.slice(this.state.clientsNumber - 20, this.state.clientsNumber).map(d => <Rows data={d} key={d.id} showPop={this.showPop} componentDidMount={this.componentDidMount} />) :
          data.map(d => <Rows data={d} key={d.id} showPop={this.showPop} componentDidMount={this.componentDidMount} />)}
      </div>
    )
  }
}

export default Table;