import { createStyles,Table } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  table: {
      padding: theme.spacing.xl,
      width: '80%',
      margin: '50px',
  }
}));

const TeamsTable = () => {
  const { classes } = useStyles();

    const data = [
        { teamMember:  'Camilla', priority: 1, dateCreated: '1/26/2023', createdBy: 'Camilla', status: 'Resolved', isShared: false},
        { teamMember: 'Kenny', priority: 2, dateCreated: '1/26/2023', createdBy: 'Kenny', status: 'Resolved', isShared: false },
        { teamMember: 'Hunter', priority: 3, dateCreated: '1/26/2023', createdBy: 'Hunter', status: 'Resolved', isShared: false },
        { teamMember: 'Trace', priority: 4, dateCreated: '1/26/2023', createdBy: 'Trace', status: 'Resolved', isShared: false },
        { teamMember: 'Jacob', priority: 5, dateCreated: '1/26/2023', createdBy: 'Jacob', status: 'Resolved', isShared: false },
      ];
      
    const rows = data.map((data) => (
        <tr key={data.createdBy}>
          <td>{data.teamMember}</td>
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
          <th>Team Member</th>
          <th># of Bugs Solved</th>
          <th>Top Priority Bug</th>
          <th># of Bugs Created</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
        </Table>
    )
}

export default TeamsTable;