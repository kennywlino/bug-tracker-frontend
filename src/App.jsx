import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthenticationImage from './components/Login';
import TicketTable from './components/TicketTable/index';
import StatsCard from './components/Progress/index';
import TeamsTable from './components/TeamsTable';
import StatsControls from './components/TeamsProgress';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import TicketForm from './components/TicketForm';
import PieChart from './components/PieChart';
import { AppShell, Grid, useMantineTheme } from '@mantine/core';
import AuthProvider from './context/Auth/index';
import AuthComponent from './components/AuthComponent/index';
import TeamMember from './components/TeamMember/index';



const App = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(true);
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route
            path='/'
            element={
              <>
                {<Hero />}
              </>
            }
          />
          <Route
            path='/login'
            element={
              <>
                <AuthenticationImage />
              </>
            }
          />
        </Routes>
        <AuthComponent>
          <AppShell
            styles={{
              main: { background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
            }}
            navbarOffsetBreakpoint="sm"
            padding="md"
            layout="alt"
            navbar={<Navigation p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 300, lg: 500 }} />}
            header={<Header height={{ base: 50, md: 70 }} p="md" />}
            footer={<Footer hiddenBreakpoint="sm" hidden={!opened}/>}
          >
            {<Routes>
              <Route
                path='/ticket'
                element={
                  <>
                    {<TicketForm />}
                  </>

                }
              />
              <Route
                path='/dashboard'
                element={
                  <>
                    {<Grid className='charts' grow>
                    <Grid.Col span={2}>{<StatsCard />}</Grid.Col>
                    <Grid.Col span={2}>{<PieChart />}</Grid.Col>
                    </Grid>}
                   {<TicketTable />}
                   

                  </>
                }
              />
              <Route
                path='/teams'
                element={
                  <>

                    {<StatsControls />}
                    {<TeamsTable />}

                  </>
                }
              />
              <Route
                path='/teammember'
                element={
                  <>

                    { <TeamMember /> }

                  </>
                }
              />
            </Routes>}
          </AppShell>
        </AuthComponent>
      </AuthProvider>
    </>
  );
};

export default App;
