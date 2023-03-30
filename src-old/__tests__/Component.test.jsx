import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer/index';
import Header from '../components/Footer/index';
import Hero from '../components/Hero/index';
import Login from '../components/Login/index';
import Navigation from '../components/Navigation/index';
import PieChart from '../components/PieChart/index';
import Progress from '../components/Progress/index';
import TeamsProgress from '../components/TeamsProgress/index';
import TeamsTable from '../components/TeamsTable/index';
import TicketForm from '../components/TicketForm/index';
import TicketTable from '../components/TicketTable/index';

describe('Footer Test', () => {
    render(
        <Footer />
    )
    it('renders footer', () => {
        const footer = screen.getByTestId('footer');
        expect(footer).toBeDefined();
    })

});

describe('Header Test', () => {
    render(
        <Header />
    )
    it('renders header', () => {
        const header = screen.getByTestId('header');
        expect(header).toBeDefined();
    })

});


describe('Hero Test', () => {
    render(
        <Hero />
    )
    it('renders hero component', () => {
        const hero = screen.getByTestId('hero');
        expect(hero).toBeDefined();
    })

});


describe('Login Test', () => {
    render(
        <Login />
    )
    it('renders login component', () => {
        const login = screen.getByTestId('login');
        expect(login).toBeDefined();
    })

});

describe('Navigation Test', () => {
    render(
        <Navigation />
    )
    it('renders navigation component', () => {
        const navigation = screen.getByTestId('navigation');
        expect(navigation).toBeDefined();
    })

});


describe('Pie Chart Test', () => {
    render(
        <PieChart />
    )
    it('renders pie chart component', () => {
        const pieChart = screen.getByTestId('pieChart');
        expect(pieChart).toBeDefined();
    })

});


describe('Progress Card Test', () => {
    render(
        <Progress />
    )
    it('renders progress component', () => {
        const progress = screen.getByTestId('progress');
        expect(progress).toBeDefined();
    })

});

describe('Teams Progress Test', () => {
    render(
        <TeamsProgress />
    )
    it('renders login component', () => {
        const teamsProgress = screen.getByTestId('teamsProgress');
        expect(teamsProgress).toBeDefined();
    })

});

describe('Teams Table Test', () => {
    render(
        <TeamsTable />
    )
    it('renders teams table component', () => {
        const teamsTable = screen.getByTestId('teamsTable');
        expect(teamsTable).toBeDefined();
    })

});

describe('Ticket Form Test', () => {
    render(
        <TicketForm />
    )
    it('renders ticket form component', () => {
        const ticketForm = screen.getByTestId('ticketForm');
        expect(ticketForm).toBeDefined();
    })

});

describe('Ticket Table Test', () => {
    render(
        <TicketTable />
    )
    it('renders ticket table component', () => {
        const ticketTable = screen.getByTestId('ticketTable');
        expect(ticketTable).toBeDefined();
    })

});


