import React, { Component } from 'react';
import '../../styles/table/popup.css'
import axios from 'axios'

class Popup extends Component {
constructor(){
    super()
    this.state ={
        updateFirstName: "",
        updateLastName: "",
        updatedCountry: "",
        
    }
}
    handleInput = (e) => {
    const target = e.target
    const value =target.value;
    const name = target.name;
    this.setState({[name] : value})
  }
    showPop = () =>{
        this.props.change()
    }

    updateClient = async () =>{
            let updatedData = {name: `${this.state.updateFirstName} ${this.state.updateLastName}`,country: this.state.updatedCountry} 
           let data = await axios.put(`http://localhost:8080/client/${this.props.data._id}`, updatedData)
           console.log(data)
          this.props.componentDidMount()
    }
   

    splitName = () =>{
        let name = this.props.data.name.split(" ")
        return name
    }
    componentDidMount = async () =>{
        this.setState({
            updatedCountry:this.props.data.country,
            updateFirstName: this.splitName()[0],
            updateLastName: this.splitName()[1]
        })
       

    }
    render() { 
        return ( <div className={this.props.class? "pop-on row":"pop-of row"} >
        <i className="fas fa-times" onClick={this.showPop}></i>
        <div className="pop-inputs">
        <div id="name">
            <div className="pop-item">Name:</div>
            <div className="pop-item">Surename:</div>
            <div className="pop-item">Country:</div>
            </div>
            <div id="surname">
            <input className="pop-input top" onChange={this.handleInput} name="updateFirstName" value={this.state.updateFirstName}/>
            <input className="pop-input" onChange={this.handleInput} name="updateLastName" value={this.state.updateLastName}/>
            <input className="pop-input" onChange={this.handleInput} name="updatedCountry" value={this.state.updatedCountry}/>
            </div>
           
            </div>
    <div id="update" onClick={this.showPop}>
    <div id="update-item" onClick={this.updateClient} >Update</div>
    </div>

        </div> )
    }
}
 
export default Popup;