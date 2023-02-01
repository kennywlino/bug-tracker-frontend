import './App.css';
import { Route, Routes } from 'react-router-dom';
import AuthenticationImage from './components/Login';
import TicketTable from './components/TicketTable/index';
import StatsCard from './components/Progress/index';
import TeamsTable from './components/TeamsTable';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import TicketForm from './components/TicketForm';



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
            <>
              <Header />
              <Footer />
              <Navigation />
              <TicketForm />
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
}

export default App;