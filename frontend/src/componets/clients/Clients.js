import React from 'react'
import Table from '../table/Table';

//css
import './Clients.css';

function Clients() {
    return (
        <div className="main-content">
           <h2 className="main-title">Clients</h2> 
            <Table 
                tableTitles={['name', 'work', 'phone_number', 'company']} 
                tableBody={[
                    {name: 'Gideon', work: 'Software Developer', phone_number: '0542638391', company: 'Aimless'},
                    {name: 'Gideon', work: 'Software Developer', phone_number: '0542638391', company: 'Aimless'},
                    {name: 'Gideon', work: 'Software Developer', phone_number: '0542638391', company: 'Aimless'},
                    {name: 'Gideon', work: 'Software Developer', phone_number: '0542638391', company: 'Aimless'},
                    {name: 'Gideon', work: 'Software Developer', phone_number: '0542638391', company: 'Aimless'},
                    {name: 'Gideon', work: 'Software Developer', phone_number: '0542638391', company: 'Aimless'},
                    {name: 'Gideon', work: 'Software Developer', phone_number: '0542638391', company: 'Aimless'},
                    {name: 'Gideon', work: 'Software Developer', phone_number: '0542638391', company: 'Aimless'},
                    {name: 'Gideon', work: 'Software Developer', phone_number: '0542638391', company: 'Aimless'},
                    {name: 'Gideon', work: 'Software Developer', phone_number: '0542638391', company: 'Aimless'},
                    {name: 'Gideon', work: 'Software Developer', phone_number: '0542638391', company: 'Aimless'}
                ]}
            />
        </div>
    )
}

export default Clients
