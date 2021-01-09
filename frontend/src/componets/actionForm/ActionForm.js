import { Button, IconButton, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import CloseIcon from '@material-ui/icons/Close';


//css
import './ActionForm.css';

function ActionForm({titles, id, handleClose}) {
    const [fields, setFields] = useState([])
    const [currentField, setCurrentField] = useState(undefined)

    useEffect(() => {
        let mounted = true;
        if(mounted){
            setFields(titles);
            setCurrentField(id);
            console.log(currentField)
        }
        else{
            return
        }
        return () => {
            mounted = false
        }
    }, [fields, currentField])

    return (
        <div className="modal">
            <IconButton onClick={handleClose}>
                <CloseIcon />
            </IconButton>
            <form className="modal-form">
                {fields.map(t => (
                    <TextField label={t} />
                ))}
                <Button variant="contained" className="btn-submit">{currentField ? 'Update' : 'Create'}</Button> 
            </form>
        </div>
    )
}

export default ActionForm
