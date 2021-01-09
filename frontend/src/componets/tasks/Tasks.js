import React from 'react'
import Table from '../table/Table';

// css
import './Tasks.css'

function Tasks() {
    return (
        <div className="main-content">
           <h2 className="main-title">Tasks</h2> 
           <Table 
           tableTitles={['title', 'start_date', 'end_date', 'status']}
           tableBody={[
               {title: "Create a face detector app", start_date:"18th January 2021", end_date:"25th January 2021", status:"not started"},
               {title: "Create a face detector app", start_date:"18th January 2021", end_date:"25th January 2021", status:"not started"},
               {title: "Create a face detector app", start_date:"18th January 2021", end_date:"25th January 2021", status:"not started"},
               {title: "Create a face detector app", start_date:"18th January 2021", end_date:"25th January 2021", status:"not started"},
               {title: "Create a face detector app", start_date:"18th January 2021", end_date:"25th January 2021", status:"not started"},
               {title: "Create a face detector app", start_date:"18th January 2021", end_date:"25th January 2021", status:"not started"},
               {title: "Create a face detector app", start_date:"18th January 2021", end_date:"25th January 2021", status:"not started"},
               {title: "Create a face detector app", start_date:"18th January 2021", end_date:"25th January 2021", status:"not started"},
               {title: "Create a face detector app", start_date:"18th January 2021", end_date:"25th January 2021", status:"not started"},
               {title: "Create a face detector app", start_date:"18th January 2021", end_date:"25th January 2021", status:"not started"},
           ]}
           />
        </div>
    )
}

export default Tasks
