import React, { Component } from 'react';
import axios from 'axios'
import Update from './Update';
import Add from './Add';
import '../../styles/crud/crud.css'

class Crud extends Component {
    constructor(){
        super()
        this.state ={
            data :[],
            firstNameAdd: "",
            lastNameAdd: "",
            countryAdd: "",
            ownerAdd: "",
            ownerUpdate: "",
            clientUpdate: "",
            emailUpdate: "",
            showV : "",
            showLoader : false
        }
    }

    cleanInputs = () => {
      this.setState({ ownerUpdate: "",emailUpdate: "",})
    }
    getData = async () =>  {
        let data = await axios.get("http://localhost:8080/clients")
        let info = data.data.map(d=> {return {name: d.name, id: d._id, owner: d.owner}})
        
        return info
     }
     postData = async () => {
        let data = await axios.post("http://localhost:8080/client", {
          
          name: `${this.state.firstNameAdd} ${this.state.lastNameAdd}`,
          country: this.state.countryAdd,
          owner: this.state.ownerAdd,
          firstContact: new Date()
        })
        return data
      }
     componentDidMount = async () =>{
        let data = await this.getData()
        this.setState({ data: data })
      }
      handleInput = (e) => {
        const target = e.target
        const value =target.value;
        const name = target.name;
        this.setState({[name] : value})
      }
      makeNewClient = async() =>{
        console.log("df")
        this.setState({showLoader: true})
        await this.postData()    
        await this.componentDidMount()
        this.changeClass()

      }

      putData = async (clientId) =>{
        let updatedData = ""

        if(this.state.ownerUpdate == "" && this.state.emailUpdate == ""){
          updatedData = {sold: true}
          this.setState({showV: "declare"})

        }
        else if(this.state.ownerUpdate == ""){
         updatedData = {emailType: this.state.emailUpdate}
         this.setState({showV: "email"})

        }
        else{
          let client = this.state.data.find(d=> d.id == clientId)
           updatedData = {owner: this.state.ownerUpdate}
           this.setState({showV: "transfer"})

        }
       let data = await axios.put(`http://localhost:8080/client/${clientId}`, updatedData)
       return data
      }
      updateClient = async (clientId) =>{
        console.log("update")
        console.log(clientId)
       await this.putData(clientId)
       this.cleanInputs()

      }
     changeClass = () =>{
       console.log("change")
       setTimeout(this.loader, 800);
     }

     loader = () =>{
       this.setState({showLoader:false})
     }
    render() { 
      

        return ( 
            <div>
            <Update data={this.state.data} state={this.state}  handleInput={this.handleInput} updateClient={this.updateClient}   />
            <Add handleInput={this.handleInput} makeNewClient={this.makeNewClient}  showLoader={this.state.showLoader}/>
            </div>
        )
    }
}
 
export default Crud;