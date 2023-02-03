import { createStyles, Table, Button } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTickets, deleteTicket } from '../../store/ticketSlice';

const useStyles = createStyles((theme) => ({
  table: {
    padding: theme.spacing.xl,
    width: '80%',
    margin: '50px',
  },
}));

const TicketTable = () => {

  const dispatch = useDispatch();
  const { tickets } = useSelector(state => state);

  useEffect(() => {

    dispatch(getTickets());
  }, []);

  // console.log('Tickets:', tickets);

  const { classes } = useStyles();

  const rows = tickets.map((ticket) => (
    <tr key={ticket.id}>
    <td>{ticket.issueType}</td>
    <td>{ticket.createdAt}</td>
    <td>{String(ticket.priority)}</td>
    <td>{ticket.notes}</td>
    <td><Button variant='compact' color='red' onClick={deleteTicket(ticket)}>X</Button></td>
  </tr>
  ));

  // console.log(rows, '');

  return (
    <>
      <Table data-testid='ticketTable' classcreatedBy={classes.table} striped highlightOnHover withColumnBorders>
        <thead>
          <tr>
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

