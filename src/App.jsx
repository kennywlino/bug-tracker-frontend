import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthenticationImage from './components/Login';
import TicketTable from './components/TicketTable/index';
import StatsCard from './components/Progress/index';
import TeamsTable from './components/TeamsTable';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import TicketForm from './components/TicketForm';
import PieChart from './components/PieChart';
import { AppShell, useMantineTheme } from '@mantine/core';


const App = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: { background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0], }
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      padding="md"
      layout="alt"
      navbar={<Navigation p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }} />}
      header={<Header height={{ base: 50, md: 70 }} p="md"/>}
      footer={<Footer />}
    >
      {<Routes>
        <Route
          path='/'
          element={
            <>
              <AuthenticationImage />
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
        <Route
          path='/hero'
          element={
            <>
              {<Hero />}
              {/* <Header />
              <Hero />
              <Footer /> */}
            </>
          }
        />
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
            <div className='charts'>
              {<StatsCard />}
              {<PieChart />}
            </div>
              {<TicketTable />}
            </>
          }
        />
        <Route
          path='/teams'
          element={
            <>
              {<TeamsTable />}
            </>
          }
        />
      </Routes>}
    </AppShell>
  );
};

export default App;