import React, { Component } from 'react';
import axios from 'axios';
import Badges from './badges/Badges';
import Charts from './charts/Charts';

class Analytics extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            loading: true
        }
    }

    getData = async () => {
        let data = await axios.get("http://localhost:8080/clients")
        return data
    }

    componentDidMount = async () => {
        let data = await this.getData()
        this.setState({ data: data.data, loading: false })
    }

    render() {

        if (!this.state.loading) {

            return (
                <div>
                    <Badges data={this.state.data} />
                    <Charts data={this.state.data} />
                </div>
            )
        }

        return (<></>)
    }
}

export default Analytics;