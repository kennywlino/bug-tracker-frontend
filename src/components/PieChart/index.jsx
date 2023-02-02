import { RingProgress, createStyles, Text, Group,  Paper } from '@mantine/core';
import './styles.css';

const ICON_SIZE = 60;

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    overflow: 'visible',
    padding: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    width: '250px',
    margin: '50px',
  },

  RingProgress: {
    align: 'center',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
  },
}));

const PieChart = () => {
  const { classes } = useStyles();

  return (

    <Paper radius="md" withBorder className={classes.card} mt={ICON_SIZE / 3}>


      <Text align="center" weight={700} className={classes.title}>
        Team Progress
      </Text>

      <RingProgress
        className='RingProgress'
        size={200}
        thickness={30}
        sections={[
          { value: 18, color: 'lime' },
          { value: 18, color: 'green' },
          { value: 21, color: 'gray' },
          { value: 22, color: 'darkgray' },
          { value: 21, color: 'darkgreen' },
        ]}
      />


      <Group className='Names' position="apart" mt="md">
        <Text size="sm">Camilla : 22%</Text>
        <Text size="sm">Jacob : 21%</Text>
        <Text size="sm">Kenny : 21%</Text>
        <Text size="sm">Hunter : 18%</Text>
        <Text size="sm">Trace : 18%</Text>
      </Group>
    </Paper>

  );
};

export default PieChart;