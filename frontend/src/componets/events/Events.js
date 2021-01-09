import React from 'react'
import Table from '../table/Table';

//css
import './Events.css';

function Events() {
    return (
        <div className="main-content">
            <h2 className="main-title">Events</h2>
           <Table 
            tableTitles={['title', 'date']}
            tableBody={[
                {title: 'Christmas', date: '26th December 2020'},
                {title: 'New Year', date: '1st January 2021'},
                {title: 'ReactJs Conference', date: '4th March, 2021'}
            ]}
           /> 
        </div>
    )
}

export default Events
