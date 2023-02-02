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
        Tream Progress
      </Text>

      <RingProgress
        className='RingProgress'
        size={130}
        thickness={39}
        sections={[
          { value: 7, color: 'lime' },
          { value: 14, color: 'green' },
          { value: 21, color: 'gray' },
          { value: 28, color: 'darkgray' },
          { value: 30, color: 'darkgreen' },
        ]}
      />


      <Group className='Names' position="apart" mt="md">
        <Text size="sm">Trace : 7%</Text>
        <Text size="sm">Hunter : 14%</Text>
        <Text size="sm">Jacob : 21%</Text>
        <Text size="sm">Camilla : 28%</Text>
        <Text size="sm">Kenny : 30%</Text>
      </Group>
    </Paper>

  )
}

export default PieChart;