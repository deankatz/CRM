import React, { Component } from 'react';
import '../../styles/table/rows.css'
import  PopUp  from './Popup';

class Rows extends Component {
    constructor(){
        super()
        this.state = {
            showPop : false
        }
    }
   
    showPop =() => {
        const currentState = this.state.showPop;
        this.setState({ showPop: !currentState });
    }
    render() { 
        let data = this.props.data
        
        return (  
            <div className="rows-header">

            <div className="row" onClick={this.showPop}>
            <div className="row-item">{data.name.split(" ")[0]}</div>
            <div className="row-item">{data.name.split(" ")[1]}</div>
            <div className="row-item">{data.firstContact.slice(0,9)}</div>
            <div className="row-item">{data.emailType}</div>
            <div className="row-item">{data.sold? <i class="fas fa-check" id="check"></i>: null}</div>
            <div className="row-item">{data.owner}</div>
            <div className="row-item">{data.country}</div>
            
            </div>
            <div>
            </div>
            <PopUp  data={this.props.data} class={this.state.showPop} change={this.showPop}  componentDidMount={this.props.componentDidMount}/>

            </div>
            
        )
    }
}
 
export default Rows;