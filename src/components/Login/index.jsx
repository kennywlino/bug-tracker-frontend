import { useContext, useState } from 'react';
import { AuthContext } from '../../context/Auth/index';
import { useToggle, upperFirst } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';

import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Anchor,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 900,
    backgroundSize: 'cover',
    backgroundImage: 'url(https://cdn.britannica.com/50/157550-050-56DA0685/Venus-flytrap-traps-insects.jpg)',
  },

  form: {
    borderRight: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
      }`,
    minHeight: 900,
    maxWidth: 450,
    paddingTop: 80,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: '100%',
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  logo: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    width: 120,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

const AuthenticationImage = () => {
  const { classes } = useStyles();

  const [type, toggle] = useToggle(['login', 'register']);
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLoginClick = (e) => {
    e.preventDefault();
    login(username, password);
    navigate('/dashboard');
}

  const {
    login,
} = useContext(AuthContext);

 
console.log(username, password);

  return (
    <>
    <div className={classes.wrapper}>
      <Paper 
      data-testid='login'
      className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} align="center" mt="md" mb={50}>
          Welcome back to VFT!
        </Title>
        {type === 'register' && (
          <TextInput label="Your name" placeholder="Your name" size="md" />
        )}
        <TextInput label="Your Username" placeholder="Your username" size="md" onChange={(event) => setUsername(event.currentTarget.value)} />
        <PasswordInput label="Your Password" placeholder="Your password" mt="md" size="md" onChange={(event) => setPassword(event.currentTarget.value)}/>
        <Checkbox color={'green'} label="Keep me logged in" mt="xl" size="md" />
        <Button type="submit" onClick={(e) => handleLoginClick(e)} color={'green'} fullWidth mt="xl" size="md">
          {upperFirst(type)}
        </Button>
          <Anchor color={'green'} onClick={() => toggle()} weight={700}>
          {type === 'register'
              ? 'Already have an account? Login'
              : "Don't have an account? Register"}
          </Anchor>
      </Paper>
    </div>
    </>
  );
};

export default AuthenticationImage;
