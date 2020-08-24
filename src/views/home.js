import React from 'react'
import '../styles/home.css'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div className="home__container">
          <h1>Welcome to chat app  </h1>
          <Link to="/signup">
            <button>SignUp  </button>        
          </Link>
          <Link to="/login">
            <button>Login</button>      
          </Link>
        </div>
    )
}

export default Home