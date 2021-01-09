import { Button } from '@material-ui/core'
import React from 'react'

//css
import './QuickAdd.css'

function QuickAdd({actions}) {
   return (
       <>
        {actions.map(a => (
            <QuickAddElm Icon={a.Icon} name={a.name} />
        ))}
       </>
   ) 
}


function QuickAddElm({Icon, name}){
    return (
            <div>
            <Button className="add-btn" variant="contained">
                <Icon />
                <span>{name}</span>
            </Button> 
        </div>
    )
}

export default QuickAdd
