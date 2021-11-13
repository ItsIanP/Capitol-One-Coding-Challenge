import "./Parks.css"
import React, { Component } from 'react'
import axios from 'axios'

/*Attempting to GET results from the API and displaying them below the header.*/

class Parks extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parks: [],
             states: '',
             designation: '',
             fullName: '',
             url: ''
        }
    }
    

    componentDidMount(){
        axios.get('https://developer.nps.gov/api/v1/activities/parks?q=Camping&limit=50&start=0&api_key=XzQoq4PnSmXxbE7mC8mtJk4cgzpEL7ratKBkIKE9')
        .then(response =>{
            this.setState({
                parks: response.data
            })
            console.log(response.data)
        })
    }

    /*Results show up in the console (I think), but not as text on page*/

    render() {
        const {parks} = this.state
        return (
            <div>
                <h1>Results</h1>
                {
                   
                parks.length ?
                this.map(parks => <div>{parks.id}</div>)
                :
                null
                
                }
            </div>
        )
    }

}

export default Parks