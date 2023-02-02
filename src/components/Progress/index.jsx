import { createStyles, ThemeIcon, Progress, Text, Group, Badge, Paper } from '@mantine/core';
import { Bug } from 'tabler-icons-react';

const ICON_SIZE = 60;

const useStyles = createStyles((theme) => ({
    card: {
        position: 'relative',
        overflow: 'visible',
        padding: theme.spacing.xl,
        paddingTop: theme.spacing.xl * 1.5 + ICON_SIZE / 3,
        width: '250px',
        margin: '50px',
    },

    icon: {
        position: 'absolute',
        top: -ICON_SIZE / 3,
        left: `calc(50% - ${ICON_SIZE / 2}px)`,
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        lineHeight: 1,
    },
}));

const StatsCard = () => {
    const { classes } = useStyles();

    return (
        <Paper radius="md" withBorder className={classes.card} mt={ICON_SIZE / 3}>
            <ThemeIcon color={'green'} className={classes.icon} size={ICON_SIZE} radius={ICON_SIZE}>
                <Bug
                    size={48}
                    strokeWidth={2}
                    color={'white'}
                />
            </ThemeIcon>

            <Text align="center" weight={700} className={classes.title}>
                Debugging Challenge
            </Text>
            <Text color="dimmed" align="center" size="sm">
                32 bugs solved / week
            </Text>

            <Group position="apart" mt="xs">
                <Text size="sm" color="dimmed">
                    Progress
                </Text>
                <Text size="sm" color="dimmed">
                    62%
                </Text>
            </Group>

            <Progress color={'green'} value={62} mt={5} />

            <Group position="apart" mt="md">
                <Text size="sm">20 / 32 bugs solved</Text>
                <Badge color={'gray'} size="sm">4 days left</Badge>
            </Group>
        </Paper>
    );
};

export default StatsCard;