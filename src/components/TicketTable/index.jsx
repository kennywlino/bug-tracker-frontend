import { createStyles, Table, Button, Checkbox } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTickets, deleteTicket } from '../../store/ticketSlice';
import axios from 'axios';

const REACT_APP_SERVER = process.env.REACT_APP_SERVER

const useStyles = createStyles((theme) => ({
  table: {
    padding: theme.spacing.xl,
    width: '80%',
    mb: '50%',
  },
}));

const TicketTable = () => {
  const dispatch = useDispatch();
  const { tickets } = useSelector(state => state);
  console.log(tickets);

  useEffect(() => {

    dispatch(getTickets());
  }, []);

  function handleResolvedCheck(ticket) {
    const values = { ...ticket, isResolved: !ticket.isResolved };
    axios
      .post(`${REACT_APP_SERVER}/api/tickets`, values)
      .then(response => console.log(response))
      .catch(err => console.log(err))
  }

  function handleDelete(ticket) {
    dispatch(deleteTicket(ticket));
  }


  const { classes } = useStyles();

  const rows = tickets.map((ticket) => (

    <tr key={ticket.id}>
      <td>
        <Checkbox
          checked={ticket.isResolved}
          onChange={() => handleResolvedCheck(ticket)}
        />
      </td>
      <td>{ticket.issueType}</td>
      <td>{ticket.createdAt}</td>
      <td>{String(ticket.priority)}</td>
      <td>{ticket.notes}</td>
      <td>
        <Button
          variant='compact'
          color='red'
          onClick={() => handleDelete(ticket)}>
          X
        </Button>
      </td>
    </tr>
    
  ));

  return (
    <>
      <Table data-testid='ticketTable' className={classes.table} striped highlightOnHover withColumnBorders>
        <thead>
          <tr>
            <th>Resolved</th>
            <th>Issue Type</th>
            <th>Date Created</th>
            <th>Priority</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </>
  );
};

export default TicketTable;

