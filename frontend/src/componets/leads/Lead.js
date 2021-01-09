import React from 'react'
import Table from '../table/Table';

//css
import './Lead.css'

function Lead() {
    return (
        <div className="main-content">
            <h2 className="main-title">Leads</h2>
            <Table 
                tableTitles={['name', 'title', 'phone_number', 'company', 'email']}
                tableBody={[
                    {name: 'Asare', title: 'Helping with frontend work', phone_number: '+233542638319', company: 'Aimless', email: 'asaregid504@gmail.com'},
                    {name: 'Asare', title: 'Helping with frontend work', phone_number: '+233542638319', company: 'Aimless', email: 'asaregid504@gmail.com'},
                    {name: 'Asare', title: 'Helping with frontend work', phone_number: '+233542638319', company: 'Aimless', email: 'asaregid504@gmail.com'},
                    {name: 'Asare', title: 'Helping with frontend work', phone_number: '+233542638319', company: 'Aimless', email: 'asaregid504@gmail.com'},
                    {name: 'Asare', title: 'Helping with frontend work', phone_number: '+233542638319', company: 'Aimless', email: 'asaregid504@gmail.com'},
                    {name: 'Asare', title: 'Helping with frontend work', phone_number: '+233542638319', company: 'Aimless', email: 'asaregid504@gmail.com'},
                    {name: 'Asare', title: 'Helping with frontend work', phone_number: '+233542638319', company: 'Aimless', email: 'asaregid504@gmail.com'},
                    {name: 'Asare', title: 'Helping with frontend work', phone_number: '+233542638319', company: 'Aimless', email: 'asaregid504@gmail.com'},
                    {name: 'Asare', title: 'Helping with frontend work', phone_number: '+233542638319', company: 'Aimless', email: 'asaregid504@gmail.com'}
                ]}
            />
        </div>
    )
}

export default Lead
