import React from 'react';

import NotificationsIcon from '@material-ui/icons/Notifications';
import AddIcon from '@material-ui/icons/Add'
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import NoteIcon from '@material-ui/icons/Note';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AssignmentIcon from '@material-ui/icons/Assignment';
import EventIcon from '@material-ui/icons/Event';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ChatIcon from '@material-ui/icons/Chat';

//images

//css
import './style.css'

export default () => {

    return(
        <div className="navbar floating fixed-top push-side">
            <a href="#" id="home-icon" title="home" className="btn btn-icon btn-float ">
                <HomeIcon style={{color: '#111'}} />
            </a>
            <ul id="navbar-nav" className="navbar-nav d-flex ml-auto">
                <li className="nav-item">
                    <a href="#" title="Quick Add" className="btn btn-float btn-icon-action ">
                        <AddIcon />
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" title="contacts" className="btn btn-float btn-icon change">
                        <ContactPhoneIcon />
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" title="notes" className="btn btn-float btn-icon change">
                        <NoteIcon />
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" title="leads" className="btn btn-float btn-icon change">
                        <AssignmentIndIcon />
                   </a>
                </li>
                <li className="nav-item">
                    <a href="#" title="tasks" className="btn btn-float btn-icon change">
                        <AssignmentIcon />
                   </a>
                </li>
                <li className="nav-item">
                    <a href="#" title="calender" className="btn btn-float btn-icon  change">
                        <EventIcon />
                   </a>
                </li>
                <li className="nav-item">
                    <a href="#" title="events" className="btn btn-float btn-icon change">
                        <CalendarTodayIcon />
                   </a>
                </li>
                <li className="nav-item">
                    <a href="#" title="chat" className="btn btn-float btn-icon change">
                        <ChatIcon />
                   </a>
                </li>
                <li className="nav-item">
                    <a href="#" title="logout" className="btn btn-float btn-danger danger">
                        <ExitToAppIcon />
                   </a>
                </li>
            </ul>
        </div>
    )
}