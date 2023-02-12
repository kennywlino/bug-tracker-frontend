import { getTickets } from '../../store/ticketSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { createStyles, ThemeIcon, Progress, Text, Group, Badge, Paper } from '@mantine/core';
import { Bug } from 'tabler-icons-react';

const ICON_SIZE = 60;

const useStyles = createStyles((theme) => ({
    card: {
        position: 'relative',
        overflow: 'visible',
        padding: theme.spacing.md,
        paddingTop: theme.spacing.md * 1.5 + ICON_SIZE / 3,
        width: '250px',
        margin: '10%',
    },

    icon: {
        position: 'absolute',
        top: -ICON_SIZE / 3,
        left: `calc(50% - ${ICON_SIZE / 2}px)`,
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        lineHeight: 1.5,
    },

    text: {
        padding: '.6%',
        lineHeight: 1.5,
    },
}));

const StatsCard = () => {
    const dispatch = useDispatch();
    const { tickets } = useSelector(state => state);
  
    useEffect(() => {
  
      dispatch(getTickets());
    }, []);

    const resolvedTickets = tickets.filter(ticket => ticket.isResolved).length;
    const unresolvedTickets = tickets.filter(ticket => !ticket.isResolved).length;

    const { classes } = useStyles();

    return (
        <>
        
        <Paper data-testid='progress' radius="md" withBorder className={classes.card} mt={ICON_SIZE / 3}>
            <ThemeIcon color={'green'} className={classes.icon} size={ICON_SIZE} radius={ICON_SIZE}>
                <Bug
                    size={48}
                    strokeWidth={2}
                    color={'white'}
                />
            </ThemeIcon>

            <Text mt={30} align="center" weight={700} className={classes.title}>
                Debugging Challenge
            </Text>
            <Text mt={20} color="dimmed" align="center" size="sm" className={classes.text}>
                100 bugs solved / week
            </Text>

            <Group position="apart" mt={40}>
                <Text size="sm" color="dimmed" className={classes.text}>
                    Progress
                </Text>
                <Text size="sm" color="dimmed" className={classes.text}>
                {Math.floor(resolvedTickets / (resolvedTickets + unresolvedTickets) * 100)}%
                </Text>
            </Group>

            <Progress color={'green'} value={62} mt={15} />

            <Group position="apart" mt={70}>
                <Text size="sm" className={classes.text}> {resolvedTickets} / {resolvedTickets + unresolvedTickets} bugs solved</Text>
                <Badge color={'gray'} size="sm">4 days left</Badge>
            </Group>
        </Paper>
        </>
    );
};

export default StatsCard;
