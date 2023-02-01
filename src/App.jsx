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
   <Header />
   <Navigation />
   <TicketForm />
   <StatsCard />
   <TicketTable />
   <Footer />
   </>
  );
}

export default App;