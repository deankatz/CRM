import React, {Component } from 'react';
import '../../../styles/analytics/analytics.css'

class EmailsBadge extends Component {
    render() { 
        let NumberOfMails = this.props.data.data.map(d=> d.emailType).filter(f=> f !== null).length
        

        return ( 
            <div className="Badge">
               <div className="badge-icon email"> <i className="far fa-envelope"></i></div>
                <div>{NumberOfMails}</div>
                <div>Emails - sent</div>
            </div>
         )
    }
}
 
export default EmailsBadge;