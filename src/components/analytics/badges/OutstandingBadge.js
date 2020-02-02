import React, { Component } from 'react';
import '../../../styles/analytics/analytics.css'

class OutstandingBadge extends Component {
    render() {
        let NumberOfOutstanding = this.props.data.data.map(d => d.sold).filter(f => f == false).length

        return (
            <div className="Badge">
                <div className="badge-icon out"><i className="fas fa-user"></i></div>
                <div>{NumberOfOutstanding}</div>
                <div>Outstanding Clients</div>
            </div>
        )
    }
}

export default OutstandingBadge;