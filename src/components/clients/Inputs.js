import React, { Component } from 'react';
import '../../styles/table/inputs.css'

class Inputs extends Component {
    nextPage = () =>{
        this.props.nextPage()
    }
    lastPage = () =>{
        this.props.lastPage()
    }


    render() { 
        return ( 
            <div className="inputs">
                <input id="input"type="text" name="search" placeholder="Search" 
                 onChange={this.props.handleInput} />
                 <select id="select-input" name="dropDown"  onChange={this.props.handleInput}>
                         <option>name</option>
                            <option>email</option>
                                <option>owner</option>
                </select>
                <div></div>
                <div><span className="direction fas fa-chevron-left" id="left" onClick={this.lastPage}></span> {this.props.clientsNumber-20} - {this.props.clientsNumber} <i className="direction fas fa-chevron-right" id="right" onClick={this.nextPage}></i></div>
            </div>
         )
    }
}
 
export default Inputs;