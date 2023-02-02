import { AppShell, Navbar, Header, Anchor } from '@mantine/core';
import { createStyles, Container, Title, Text, Button } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: '#11284b',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage:
      'linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80)',
    paddingTop: theme.spacing.xl * 5,
    paddingBottom: theme.spacing.xl * 7,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
    },
  },

  image: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  content: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: 500,
    fontSize: 48,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: 34,
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: 500,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
    },
  },

  control: {
    paddingLeft: 50,
    paddingRight: 50,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 22,

    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
  },
}));

const Hero = () => {
  const { classes } = useStyles();

  const handleGetStartedClick = () => {
    window.location = '/login';
}

  return (
      <div className={classes.root}>
        <Container size="xl">
          <div className={classes.inner}>
            <div className={classes.content}>
              <Title className={classes.title}>
                Welcome to{' '}
                <Text
                  component="span"
                  inherit
                  variant="gradient"
                  gradient={{ from: 'lime', to: 'green' }}
                >
                  VFT
                </Text>
                </Title>
  
              <Text className={classes.description} mt={30}>
                An app designed by developers for developers. Allows for teams to manage and track bugs, errors, and issues in your projects.
              </Text>
  
              <Button
                onClick={handleGetStartedClick}
                variant="gradient"
                gradient={{ from: 'green', to: 'navy' }}
                size="xl"
                className={classes.control}
                mt={40}>
                Get started
              </Button>
            </div>
          </div>
        </Container>
      </div>
    );
};

export default Hero;