import React, { Component } from 'react';
import '../../styles/crud/crud.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Update extends Component {



    FindIdAndUpdateClient = () => {
        if (this.props.state.clientUpdate == "") {
            alert("insert A Client")
            return
        }
        let client = this.props.data.find(d => d.name == this.props.state.clientUpdate)
        this.props.updateClient(client.id)
    }

    makeOwnersSet = () => {
        let ownersSet = new Set()
        this.props.data.map(d => ownersSet.add(d.owner))
        let ownersArr = Array.from(ownersSet)
        return ownersArr
    }
  
    render() {
        let data = this.props.data



        return (
            <div className="update-container">
                <h2>Update</h2>
                <div className="update">
                    <span>Client: </span>
                    <input list="clients" name="clientUpdate" onChange={this.props.handleInput} placeholder="Client Name" />
                    <datalist id="clients">
                        {data.map(d => <option value={d.name} />)}
                    </datalist>
                </div>

                <div className="update-transfer update-item">
                    <span className="head-item">Transfer Ownership to: </span>
                    <select className="select-input" name="ownerUpdate" onChange={this.props.handleInput} value={this.props.state.ownerUpdate}>
                        <option>owner</option>
                        {this.makeOwnersSet().map(d => <option >{d}</option>)}
                    </select>
                    <span onClick={this.FindIdAndUpdateClient}  className="buttons-update">Transfer  {this.props.state.showV == "transfer"?  <i class="fas fa-check"></i>: null}
</span>
                </div>

                <div className="update-mail update-item">
                <span className="head-item">Send Email: </span>
                <select className="select-input" name="emailUpdate" onChange={this.props.handleInput} value={this.props.state.emailUpdate}>
                    <option></option>
                    <option>null</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                </select>
                <span onClick={this.FindIdAndUpdateClient}  className="buttons-update">Send {this.props.state.showV == "email"?  <i class="fas fa-check"></i>: null}</span>
                </div>

                <div className="update-declare update-item">
                <span className="head-item">Declare Sale! </span>
                <span></span>
                <span onClick={this.FindIdAndUpdateClient} className="buttons-update">Declare {this.props.state.showV== "declare"?  <i class="fas fa-check"></i>: null}</span>
                </div>
                <div id="line"></div>
                </div>


        )
    }
}

export default Update;