import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            Home Page
           <div>
           <Link to = "/about">About </Link> 
           </div>
        </div>
    )
}

export default Home
