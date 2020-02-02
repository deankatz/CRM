import React, {Component } from 'react';
import '../../../styles/analytics/analytics.css'

class DateBadge extends Component {

    findDates = () => {
        let dates = this.props.data.data.map(d=> d.firstContact.split("-")[1])
        
        let date =((new Date()).getMonth() + 1).toString()
        let myDate = 0+ date
        let times = 0
        for(let d of dates){
            if(d == myDate){
                times++
            }
        }
        return times
    }
    render() { 
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        return ( 
            <div className="Badge">
             <div className="badge-icon date"><i className="fas fa-chart-line"></i></div>
            <div>{this.findDates()}</div>
            <div>new {months[new Date().getMonth()]} customers</div>
            </div>
         )
    }
}
 
export default DateBadge;