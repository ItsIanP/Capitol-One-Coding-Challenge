import React from 'react'
import "./Page.css"
import Biking from "./images/Biking.jpg"
import Climbing from "./images/Climbing.jpg"
import Camping from "./images/Camping.jpg"
import Boating from "./images/Boating.jpg"



const Page = () => {

    /*const park = [
        {
            states: '',
            parkCode: '',
            designation: '',
            fullName: '',
            url: '',
            name: ''
        }
    ];

    const [posts, setPosts] = useState(park);
    const [, setLocation] = useState("");
    const [url, setUrl] = useState("");
const [text, setText] = useState("");*/

    return (
        <div className = 'page'>
        <p>Select an activity to see find which Parks you should visit.</p>

        {/*Buttons for Biking, Climbing, Camping, and Boating respectively*/}

        <button>
            <img src={Biking} alt={""} 
            style={{height: '200px' , width: '300px'}} />
            <p>Biking</p>
        
        </button>

        <p></p>
        <p></p>

        <button>
            <img src={Climbing} alt={""} 
            style={{height: '200px' , width: '300px'}} />
            <p>Climbing</p>    
        </button>

        <p></p>
        <p></p>

        <button>
            <img src={Camping} alt={""} 
            style={{height: '200px' , width: '300px'}} />
            <p>Camping</p>    
        </button>

        <p></p>
        <p></p>

        <button>
            <img src={Boating} alt={""} 
            style={{height: '200px' , width: '300px'}} />
            <p>Boating</p>    
        </button>
        
        <p></p>
        <p></p>
        
        </div>
    )
}

export default Page
