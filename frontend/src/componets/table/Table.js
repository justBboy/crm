import React, { useEffect, useRef, useState } from 'react';
import TablePagination from '@material-ui/core/TablePagination';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import { Button, IconButton, Modal } from '@material-ui/core';
import ActionForm from '../actionForm/ActionForm';

//css
import './Table.css'

const StyledTableCell = withStyles((theme) => ({
  
  head: {
    backgroundColor: theme.palette.common.green,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    maxWidth: 1400,
  },
  TableHead:{
    backgroundColor: "#fff",
  }
});
	
export default function CustomizedTables({tableTitles, tableBody}) {
  const classes = useStyles();
  const [titles, setTitles] = useState([])
  const [body, setBody] = useState([])
  const [open, setOpen] = useState(false)
  const idToShow = useRef(undefined)

  useEffect(() => {
    let mounted = true;
    if (mounted){
      setTitles(tableTitles);
      setBody(tableBody)
    }
    else{
      return
    }

    return () => {
      mounted = false
    }
  }, [titles, body])

  const handleClick = id => {
    console.log(id)
    setOpen(true)
  }

  const handleClose = () =>{
    setOpen(false)
  }
  return (
    <div className="table-content">
        <Button className="table-add-btn" onClick={() => handleClick(null)} variant="contained">
        Add New  
        </Button> 
      <main>
        
      <TableContainer className="container" component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow className="table-row">
            {titles.map(title => (
              <StyledTableCell>{title}</StyledTableCell>
            ))}
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {body.map((row) => (
            <StyledTableRow className="table-data" onClick={() => handleClick(row.id)} key={row.id || ''}>
                {titles.map(t => (
                  <StyledTableCell>
                    {row[t]}
                  </StyledTableCell>
                ))}
                <StyledTableCell>
                  <IconButton className="btn-danger"><DeleteIcon /></IconButton>
                </StyledTableCell>
              </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={3}
              />
    </TableContainer>
      <Modal open={open} onClose={handleClose}>
        <ActionForm titles={titles} handleClose={handleClose} id={idToShow.current} />
      </Modal>
      </main>
    </div>
   

  );
}
