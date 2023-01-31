import { createStyles,Table } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  table: {
      padding: theme.spacing.xl,
      width: '80%',
      margin: '50px',
  }
}));

const TicketTable = () => {
  const { classes } = useStyles();

    const data = [
        { issueType: 500, priority: 1, dateCreated: '1/26/2023', createdBy: 'Camilla', status: 'Resolved', isShared: false},
        { issueType: 404, priority: 2, dateCreated: '1/26/2023', createdBy: 'Kenny', status: 'Resolved', isShared: false },
        { issueType: 302, priority: 3, dateCreated: '1/26/2023', createdBy: 'Hunter', status: 'Resolved', isShared: false },
        { issueType: 400, priority: 4, dateCreated: '1/26/2023', createdBy: 'Trace', status: 'Resolved', isShared: false },
        { issueType: 500, priority: 5, dateCreated: '1/26/2023', createdBy: 'Jacob', status: 'Resolved', isShared: false },
      ];
      
    const rows = data.map((data) => (
        <tr key={data.createdBy}>
          <td>{data.issueType}</td>
          <td>{data.createdBy}</td>
          <td>{data.dateCreated}</td>
          <td>{data.priority}</td>
          <td>{data.status}</td>
          <td>{data.isShared}</td>
        </tr>
    ));
    return(
        <Table classcreatedBy={classes.table} striped highlightOnHover withColumnBorders>
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
      <tbody>{rows}</tbody>
        </Table>
    )
}

export default TicketTable;