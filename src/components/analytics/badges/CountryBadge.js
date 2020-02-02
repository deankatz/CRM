import React, {Component } from 'react';
import '../../../styles/analytics/analytics.css'

class CountryBadge extends Component {

    findCountry =() =>{
        let HottestCountry = this.props.data.data.map(d=> d.country)
        let mf = 1;
        let m = 0;
        let item;
        for (let i=0; i<HottestCountry.length; i++)
        {for (let j=i; j<HottestCountry.length; j++)
                {if (HottestCountry[i] == HottestCountry[j])
                         m++;
                        if (mf<m){
                          mf=m; 
                          item = HottestCountry[i];
                        }
                }
                m=0;
        }
        return item
    }
    render() { 
       
   

        return ( 
        <div className="Badge">
        <div className="badge-icon country"><i className="fas fa-globe-americas"></i></div>
            <div>{this.findCountry()}</div>
            <div>Hottest Country</div>
            </div>
         )
    }
}
 
export default CountryBadge;