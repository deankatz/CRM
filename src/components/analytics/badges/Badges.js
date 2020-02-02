import React, {Component } from 'react';
import  DateBadge  from './DateBadge';
import  EmailsBadge  from './EmailsBadge';
import  OutstandingBadge  from './OutstandingBadge';
import  CountryBadge  from './CountryBadge';
import '../../../styles/analytics/analytics.css'

class Badges extends Component {
    
    render() { 
        return ( 
            <div className="badges">
                <DateBadge data={this.props}/>
                <EmailsBadge data={this.props}/>
                <OutstandingBadge data={this.props} />
                <CountryBadge data={this.props} />
            </div>
            )
    }
}
 
export default Badges;