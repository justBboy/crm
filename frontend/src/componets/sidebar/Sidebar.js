import React,{useState} from 'react'
import "./Sidebar.css"
import {Link} from 'react-router-dom'
import Notifications from '../notifications/Notifications'
import MenuIcon from '@material-ui/icons/Menu'
import MenuOpenIcon from '@material-ui/icons/MenuOpen'
import ListIcon from '@material-ui/icons/List'
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import HomeIcom from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import DeveloperIcon from '@material-ui/icons/DeveloperMode'
import NotificationsIcon from '@material-ui/icons/Notifications'
import EventNoteIcon from '@material-ui/icons/EventNote';
import NoteIcon from '@material-ui/icons/Note';
import TimeIcon from '@material-ui/icons/Timer'
import SettingsIcon from '@material-ui/icons/Settings'
import CommentIcon from '@material-ui/icons/Comment'
import ContactsIcon from '@material-ui/icons/Contacts';
import AddIcon from '@material-ui/icons/Add';
import ComputerIcon from '@material-ui/icons/Computer';
import PeopleIcon from '@material-ui/icons/People';
import PopperContainer from '../utils/popper'
import QuickAdd from '../quickAdd/QuickAdd'

function Sidebar(props) {
const  [click,setClick] = useState(false);
const handleClick = ()=>{ setClick(prev => !prev);}

    return (
        <>
        <input type="checkbox" id="sidebar-toggle"/>
          <div className="sidebar" id={click ? "reduce" : ""} >
              <div className="sidebar-header">
                  <h3 className="brand">
                      <span>CodingGreat</span> 
                    </h3>
                  <label for="sidebar-toggle" className="menu" onClick={handleClick}>
                    <ListIcon className={click ? "initial": "initial"} id="list-icon"/>
                    {/* <MenuOpenIcon className={click ? "none": "initial"} id="open"  />  */}
                  </label>
              </div>
                 <div className="sidebar-menu">
                     <ul>
                         <li>
                             <Link to="/">
                                 <span>
                                     <HomeIcom />
                                 </span>
                                 <span className="list">Home</span>
                              </Link>
                        </li>
                         <li>
                             <Link to="/events">
                                 <span>
                                        <EventNoteIcon />
                                 </span>
                                 <span  className="list">Events</span>
                              </Link>
                        </li>
                         <li>
                             <Link to="/notes">
                                 <span>
                                     <NoteIcon />
                                 </span>
                                 <span  className="list">Notes</span>
                              </Link>
                        </li>
                         <li>
                             <Link to="/leads">
                                 <span className="icon">
                                     <ContactsIcon />
                                 </span>
                                 <span  className="list">Leads</span>
                              </Link>
                        </li>
                         <li>
                             <Link to="/tasks">
                                 <span>
                                     <ConfirmationNumberIcon />
                                 </span>
                                 <span  className="list">Tasks</span>
                              </Link>
                        </li>
                         <li>
                             <Link to="/contacts">
                                 <span>
                                     <ContactPhoneIcon />
                                 </span>
                                 <span  className="list">Contacts</span>
                              </Link>
                        </li>
                         <li>
                             <Link to="/projects">
                                 <span>
                                     <ComputerIcon />
                                 </span>
                                 <span  className="list">Projects</span>
                              </Link>
                        </li>
                         <li>
                             <Link to="/clients">
                                 <span>
                                     <PeopleIcon />
                                 </span>
                                 <span  className="list">Clients</span>
                              </Link>
                        </li>
                         <li>
                             <Link to="/account">
                                 <span>
                                     <SettingsIcon />
                                 </span>
                                 <span  className="list">Account</span>
                              </Link>
                        </li>
                     
                     </ul>
                 </div>
            </div> 

            <div className="search-content" id={click ? "increase" : ""}>
                <header>
                    <div className="search-wrapper">
                        <span className="sh">
                            <SearchIcon />
                        </span>
                        <input type="search" placeholder="Search" />
                    </div>
                    <div className="social-icons">
                        <span>
                            <PopperContainer trig={<AddIcon />}>
                                <QuickAdd 
                                actions={[
                                    {name: 'Event', Icon:EventNoteIcon},
                                    {name: 'Note', Icon:NoteIcon},
                                    {name: 'Lead', Icon:ContactsIcon},
                                    {name: 'Task', Icon:ConfirmationNumberIcon},
                                    {name: 'Contacts', Icon:ContactPhoneIcon},
                                    {name: 'projects', Icon:ComputerIcon},
                                    {name: 'clients', Icon:PeopleIcon}
                                ]}
                                />
                            </PopperContainer>
                        </span>
                         <span>
                             <PopperContainer trig={<NotificationsIcon />}>
                                 <Notifications 
                                 notifications={[
                                     {title: 'hello user', body:'welcome to this nice and updatable app.'},
                                     {title: 'hello user', body:'welcome to this nice and updatable app.'},
                                     {title: 'hello user', body:'welcome to this nice and updatable app.'},
                                     {title: 'hello user', body:'welcome to this nice and updatable app.'},
                                     {title: 'hello user', body:'welcome to this nice and updatable app.'},
                                     {title: 'hello user', body:'welcome to this nice and updatable app.'},
                                     {title: 'hello user', body:'welcome to this nice and updatable app.'},
                                     {title: 'hello user', body:'welcome to this nice and updatable app.'},
                                     {title: 'hello user', body:'welcome to this nice and updatable app.'},
                                     {title: 'hello user', body:'welcome to this nice and updatable app.'}
                                 ]}
                                 />
                             </PopperContainer>
                         </span>
                         <span className="notify">
                            
                            <Link to="/chat" style={{color: "black"}}>
                           <span className="not">3</span> <CommentIcon /> 
                            </Link>
                        </span>
                        <div className="image">
                            <img src={props.image} alt=""/>
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}

export default Sidebar
