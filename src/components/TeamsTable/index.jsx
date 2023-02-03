import { createStyles, Table } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  table: {
    padding: theme.spacing.xl,
    width: '80%',
    margin: '50px',
  },
}));

const TeamsTable = () => {
  const { classes } = useStyles();

  const data = [
    { teamMember: 'Camilla', bugsCreated: 2, priority: 'Yes', bugsSolved: '18' },
    { teamMember: 'Kenny', bugsCreated: 2, priority: '', bugsSolved: '22' },
    { teamMember: 'Hunter', bugsCreated: 3, priority: 'Yes', bugsSolved: '17' },
    { teamMember: 'Trace', bugsCreated: 4, priority: 'Yes', bugsSolved: '16' },
    { teamMember: 'Jacob', bugsCreated: 3, priority: '', bugsSolved: '17' },
  ];

  const rows = data.map((data) => (
    <tr key={data.createdBy}>
      <td>{data.teamMember}</td>
      <td>{data.bugsSolved}</td>
      <td>{data.priority}</td>
      <td>{data.bugsCreated}</td>
    </tr>
  ));
  return (
    <>
    
    <Table classcreatedBy={classes.table} striped highlightOnHover withColumnBorders>
      <thead>
        <tr>
          <th>Team Member</th>
          <th># of Bugs Solved</th>
          <th>Has a Top Priority Bug</th>
          <th># of Bugs Created</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
    </>
  );
};

export default TeamsTable;
