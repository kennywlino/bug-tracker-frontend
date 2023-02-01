import { Route, Routes } from 'react-router-dom';
import TicketTable from './components/TicketTable/index';
import StatsCard from './components/Progress/index';
import './App.css';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Navigation from './Components/Navigation';
import TicketForm from './Components/TicketForm';



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