import React from 'react'
import Table from '../table/Table'


//css
import './Contacts.css'

function Contacts() {
    return (
        <div className="main-content">
           <h2 className="main-title">Contacts</h2> 
           <Table
            tableTitles={['name', 'phone_number', 'email', 'alias']}
            tableBody={[
                {name: 'Asare Gideon', phone_number: '0542638319', email: 'asaregid504@gmail.com', alias: 'Mj'},
                {name: 'Asare Gideon', phone_number: '0542638319', email: 'asaregid504@gmail.com', alias: 'Mj'},
                {name: 'Asare Gideon', phone_number: '0542638319', email: 'asaregid504@gmail.com', alias: 'Mj'},
                {name: 'Asare Gideon', phone_number: '0542638319', email: 'asaregid504@gmail.com', alias: 'Mj'},
                {name: 'Asare Gideon', phone_number: '0542638319', email: 'asaregid504@gmail.com', alias: 'Mj'},
                {name: 'Asare Gideon', phone_number: '0542638319', email: 'asaregid504@gmail.com', alias: 'Mj'},
                {name: 'Asare Gideon', phone_number: '0542638319', email: 'asaregid504@gmail.com', alias: 'Mj'},
                {name: 'Asare Gideon', phone_number: '0542638319', email: 'asaregid504@gmail.com', alias: 'Mj'},
                {name: 'Asare Gideon', phone_number: '0542638319', email: 'asaregid504@gmail.com', alias: 'Mj'},
                {name: 'Asare Gideon', phone_number: '0542638319', email: 'asaregid504@gmail.com', alias: 'Mj'},
                {name: 'Asare Gideon', phone_number: '0542638319', email: 'asaregid504@gmail.com', alias: 'Mj'},
            ]}
           />
        </div>
    )
}

export default Contacts
