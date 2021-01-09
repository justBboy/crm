import React from 'react'
import Table from '../table/Table'

//css
import './Note.css'

function Note() {
    return (
        <div className="main-content">
           <h2 className="main-title">Notes</h2> 
           <Table 
            tableTitles={['title', 'note']}
            tableBody={[
                {title: "Notes on Client yaw's work ", note: "I must use comments"},
                {title: "Notes on hackathon presentation", note: "There must be no vulgur words"},
            ]}
           />
        </div>
    )
}

export default Note
