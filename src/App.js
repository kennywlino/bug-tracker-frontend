// import Table from './components/Table/index';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Navigation from './Components/Navigation';
import TicketForm from './Components/TicketForm';

function App() {
  return (
   <>
   <Header />
   <Navigation />
   <TicketForm />
   {/* <Table /> */}
   <Footer />
   </>
  );
}

export default App;