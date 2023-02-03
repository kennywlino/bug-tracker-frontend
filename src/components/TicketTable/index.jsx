import { createStyles, Table } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTickets } from '../../store/ticketSlice';

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


  console.log('Tickets:', tickets);

  const { classes } = useStyles();

  // const rows = data.map((data) => (
  //   <tr key={data.issueType}>
  //     <td>{data.dateCreated}</td>
  //     <td>{data.priority}</td>
  //     <td>{data.notes}</td>
  //   </tr>
  // ));
  return (
    <>
      <Table data-testid='ticketTable' classcreatedBy={classes.table} striped highlightOnHover withColumnBorders>
        <thead>
          <tr>
            <th>Issue Type</th>
            <th>Created By</th>
            <th>Date Created</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Shared</th>
          </tr>
        </thead>
        {/* <tbody>{rows}</tbody> */}
      </Table>
    </>
  );
};

export default TicketTable;
