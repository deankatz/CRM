import React, {Component } from 'react';
import '../../styles/table/tableHeader.css'

class TableHeader extends Component {
    render() { 
        return ( 
        <div className="table-header-container">
            <div className="table-header-item">first name</div>
            <div className="table-header-item">last name</div>

            <div className="table-header-item">firstContact</div>
            <div className="table-header-item">emailType</div>
            <div className="table-header-item">sold</div>
            <div className="table-header-item">owner</div>
            <div className="table-header-item">country</div>
        </div> 
        )
    }
}
 
export default TableHeader;