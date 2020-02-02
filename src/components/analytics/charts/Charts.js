import React, { Component } from 'react';
import EmployeesChart from './EmployeesChart';
import CountySalesChart from './CountySalesChart';
import SalesChart from './SalesChart';
import ClientsChart from './ClientsChart';

class Charts extends Component {
    render() {
        return (
            <div>
            <div className="top-charts">
                <EmployeesChart data={this.props.data}/>
                <SalesChart data={this.props.data} />
                </div>
                <div className="bottom-charts">
                <CountySalesChart data={this.props.data}/>
                <ClientsChart />
                </div>
            
            </div>
        )
    }
}

export default Charts;