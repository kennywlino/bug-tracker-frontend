import './App.css';
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
import { AppShell, Navbar } from '@mantine/core';



const App = () => {
  return (
    <>
      <Routes>
        <Route
          path='/login'
          element={
            <>
              <AuthenticationImage />
            </>
          }
        />
        <Route
          path='/'
          element={
            <AppShell
              padding="md"
              layout="alt"
              navbar={<Navbar width={{ base: 300 }} height={500} p="lg">Navbar content</Navbar>}
              header={<Header />}
              footer={<Footer />}
            >
              {<Hero />}
              {/* <Header />
              <Hero />
              <Footer /> */}
            </AppShell>
          }
        />
        <Route
          path='/ticket'
          element={
            <>
              <Header />
              <Navigation />
              <TicketForm />
              <Footer />
            </>
          }
        />
        <Route
          path='/dashboard'
          element={
            <>
              <StatsCard />
              <TicketTable />
            </>
          }
        />
        <Route
          path='/teams'
          element={
            <>
              <TeamsTable />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;