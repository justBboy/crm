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

//images

//css
import './style.css'

export default () => {

    return(
        <div className="navbar floating fixed-top push-side">
            <a href="#" id="home-icon" title="home" className="btn btn-icon btn-float">
                <HomeIcon style={{color: '#111'}} />
            </a>
            <ul id="navbar-nav" className="navbar-nav d-flex ml-auto">
                <li className="nav-item nav-home">
                    <a title="notifications" className="btn btn-float btn-icon-notification" href="#"><NotificationsIcon /></a>
                </li>
                <li className="nav-item">
                    <a href="#" title="Quick Add" className="btn btn-float btn-icon">
                        <AddIcon />
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" title="contact" className="btn btn-float btn-icon">
                        <ContactPhoneIcon />
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" title="notes" className="btn btn-float btn-icon">
                        <NoteIcon />
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" title="leads" className="btn btn-float btn-icon">
                        <AssignmentIndIcon />
                   </a>
                </li>
                <li className="nav-item">
                    <a href="#" title="tasks" className="btn btn-float btn-icon">
                        <AssignmentIcon />
                   </a>
                </li>
                <li className="nav-item">
                    <a href="#" title="calender" className="btn btn-float btn-icon">
                        <EventIcon />
                   </a>
                </li>
                <li className="nav-item">
                    <a href="#" title="events" className="btn btn-float btn-icon">
                        <CalendarTodayIcon />
                   </a>
                </li>
                <li className="nav-item">
                    <a href="#" title="logout" className="btn btn-float btn-danger">
                        <ExitToAppIcon />
                   </a>
                </li>
            </ul>
        </div>
    )
}