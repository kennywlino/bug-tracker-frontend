import { createStyles, Table, Button, Select, Checkbox } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getTickets, deleteTicket } from '../../store/ticketSlice';
import { Filter } from 'tabler-icons-react';
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
    const value = { ...ticket, isResolved: !ticket.isResolved };
    axios
      .put(`${REACT_APP_SERVER}/api/tickets/${ticket.id}`, value)
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
          compact
          size='xs'
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
            <th>Resolved
            <Select
                icon={ <Filter
                  size={18}
                  strokeWidth={2}
                  color={'black'}
                />}
                placeholder='filter'
                data={[
                  { value: 'filterAscending', label: 'Filter ascending' },
                  { value: 'filterDescending', label: 'Filter descending' },
                ]}>
               
              </Select>
            </th>
            <th>Issue Type
            <Select
                icon={ <Filter
                  size={18}
                  strokeWidth={2}
                  color={'black'}
                />}
                placeholder='filter'
                data={[
                  { value: 'filterAscending', label: 'Filter ascending' },
                  { value: 'filterDescending', label: 'Filter descending' },
                ]}>
               
              </Select>
            </th>
            <th>Date Created
              <Select
                icon={ <Filter
                  size={18}
                  strokeWidth={2}
                  color={'black'}
                />}
                placeholder='filter'
                data={[
                  { value: 'filterAscending', label: 'Filter ascending' },
                  { value: 'filterDescending', label: 'Filter descending' },
                ]}>
               
              </Select>
            </th>
            <th>Priority
            <Select
                icon={ <Filter
                  size={18}
                  strokeWidth={2}
                  color={'black'}
                />}
                placeholder='filter'
                data={[
                  { value: 'filterAscending', label: 'Filter ascending' },
                  { value: 'filterDescending', label: 'Filter descending' },
                ]}>
               
              </Select>
            </th>
            <th>Notes</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </>
  );
};

export default TicketTable;

