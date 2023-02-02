import { useState } from 'react';
import dayjs from 'dayjs';
import { createStyles, UnstyledButton, Text, Paper, Group } from '@mantine/core';
import { BugOff, Bug, ChevronDown, ChevronUp } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  root: {
    backgroundImage: `linear-gradient(-60deg, #51CF66 0%, #B2F2BB 100%)`,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    display: 'flex',

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  icon: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing.lg,
    color: theme.black,
  },

  stat: {
    minWidth: 98,
    paddingTop: theme.spacing.xl,
    minHeight: 140,
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: theme.white,
  },

  label: {
    textTransform: 'uppercase',
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.colors.gray[6],
    lineHeight: 1.2,
  },

  value: {
    fontSize: theme.fontSizes.sm,
    fontWeight: 700,
    color: theme.black,
  },

  count: {
    color: theme.colors.gray[6],
  },

  day: {
    fontSize: 44,
    fontWeight: 700,
    color: theme.white,
    lineHeight: 1,
    textAlign: 'center',
    marginBottom: 5,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  month: {
    fontSize: theme.fontSizes.sm,
    color: theme.white,
    lineHeight: 1,
    textAlign: 'center',
  },

  controls: {
    display: 'flex',
    flexDirection: 'column',
    color: theme.black,
    marginRight: theme.spacing.xl * 2,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 0,
      marginBottom: theme.spacing.xl,
    },
  },

  date: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  control: {
    height: 28,
    width: '100%',
    color: theme.black,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.radius.md,
    transition: 'background-color 50ms ease',

    [theme.fn.smallerThan('xs')]: {
      height: 34,
      width: 34,
    },

    '&:hover': {
      backgroundColor: '#B2F2BB',
      color: theme.white,
    },
  },

  controlIcon: {
    [theme.fn.smallerThan('xs')]: {
      transform: 'rotate(-90deg)',
    },
    color: theme.black,
  },
}));

const data = [
  { icon: BugOff, label: 'Bugs Resolved' },
  { icon: Bug, label: 'Bugs Unresolved' },
];

const StatsControls = () => {
  const { classes } = useStyles();
  const [date, setDate] = useState(new Date(2023, 1, 3));

  const stats = data.map((stat) => (
    <Paper className={classes.stat} radius="md" shadow="md" p="xs" key={stat.label}>
      <stat.icon size={32} className={classes.icon} stroke={1.5} />
      <div>
        <Text className={classes.label}>{stat.label}</Text>
        <Text size="xs" className={classes.count}>
          <span className={classes.value}>{Math.floor(Math.random() * 6 + 4)} bugs</span> / 10 bugs
        </Text>
      </div>
    </Paper>
  ));

  return (
    <div className={classes.root}>
      <div className={classes.controls}>
        <UnstyledButton
          className={classes.control}
          onClick={() => setDate((current) => dayjs(current).add(1, 'day').toDate())}
        >
          <ChevronUp className={classes.controlIcon} stroke={1.5} />
        </UnstyledButton>

        <div className={classes.date}>
          <Text className={classes.day}>{dayjs(date).format('DD')}</Text>
          <Text className={classes.month}>{dayjs(date).format('MMMM')}</Text>
        </div>

        <UnstyledButton
          className={classes.control}
          onClick={() => setDate((current) => dayjs(current).subtract(1, 'day').toDate())}
        >
          <ChevronDown className={classes.controlIcon} stroke={1.5} />
        </UnstyledButton>
      </div>
      <Group sx={{ flex: 1 }}>{stats}</Group>
    </div>
  );
}

export default StatsControls;