import React from 'react'
import {Link} from 'react-router-dom'
import './dash.css'
import './medial.css'
import Cards from './Cards'
import Recent from './Recent'
import user from '../images/user-3.png'
import ChatIcon from '@material-ui/icons/Chat'



function Dashboard(props) {
    return (
        <>
        <div className="main-content">
        <main>
        <h2 className="dash-title">Dashboard</h2>
          <Cards />
          <Recent image={user} />
          
          <Link to="/exchat" className="exchat">
            
            <span>
              <ChatIcon />
            </span>
            Chat With Clients
          </Link>
        </main>
        </div>  
        </>
        )
    }
    
    export default Dashboard
    