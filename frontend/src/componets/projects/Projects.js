import React from 'react'
import Table from '../table/Table'


//css
import './Projects.css'

function Projects() {
    return (
        <div className="main-content">
           <h2 className="main-title">Projects</h2> 
           <Table 
            tableTitles={['title', 'client', 'start_date', 'end_date', 'status']} 
            tableBody={[
                {title:'Dummy data creator library', client: 'Gideon', start_date: '14th January 2021', end_date: '30th January 2021', status: 'Not started'},
                {title:'Dummy data creator library', client: 'Gideon', start_date: '14th January 2021', end_date: '30th January 2021', status: 'Not started'},
                {title:'Dummy data creator library', client: 'Gideon', start_date: '14th January 2021', end_date: '30th January 2021', status: 'Not started'},
                {title:'Dummy data creator library', client: 'Gideon', start_date: '14th January 2021', end_date: '30th January 2021', status: 'Not started'},
                {title:'Dummy data creator library', client: 'Gideon', start_date: '14th January 2021', end_date: '30th January 2021', status: 'Not started'},
                {title:'Dummy data creator library', client: 'Gideon', start_date: '14th January 2021', end_date: '30th January 2021', status: 'Not started'},
                {title:'Dummy data creator library', client: 'Gideon', start_date: '14th January 2021', end_date: '30th January 2021', status: 'Not started'},
                {title:'Dummy data creator library', client: 'Gideon', start_date: '14th January 2021', end_date: '30th January 2021', status: 'Not started'},
                {title:'Dummy data creator library', client: 'Gideon', start_date: '14th January 2021', end_date: '30th January 2021', status: 'Not started'},
                {title:'Dummy data creator library', client: 'Gideon', start_date: '14th January 2021', end_date: '30th January 2021', status: 'Not started'},
                {title:'Dummy data creator library', client: 'Gideon', start_date: '14th January 2021', end_date: '30th January 2021', status: 'Not started'}
            ]}
           />
        </div>
    )
}

export default Projects
