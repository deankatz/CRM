import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Table from './components/clients/Table';
import Crud from './components/crud/Crud';
import Analytics from './components/analytics/Analytics';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state ={
      active: "Table"
    }
  }
 
 
  changeActive = (e) => {
   this.setState({active:e.target.id}) 

    

    
  }

  render() { 

    return (
      <Router>
        <div className="nav-bar">
      <Link to="/"><div className={this.state.active === "Table"? "active head": "head"}id="Table" onClick={this.changeActive}>Clients</div></Link>
      <Link to="/Crud"><div className={this.state.active === "Actions"? "active head": "head"}  id="Actions" onClick={this.changeActive}>Actions</div></Link>
      <Link to="/Analytics"><div className={this.state.active === "Analytics"? "active head": "head"} id="Analytics" onClick={this.changeActive}>Analytics</div></Link>
      <div></div>
      <Link to="/"><div className={this.state.head? "head-show":"head-of"} >Hello, {this.state.name}</div></Link>

      </div>
      <Route path="/" exact render={() => <Table   />} />
      <Route path="/Crud" exact render={() => <Crud   />} />
      <Route path="/Analytics" exact render={() => <Analytics  />} />



      </Router>
      )
  }
}
 

export default App;
