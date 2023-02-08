import { Tabs, Button } from '@mantine/core';
import { useNavigate, useParams } from 'react-router-dom';
import { Bug, Dashboard, Users, User } from 'tabler-icons-react';
import { AuthContext } from '../../context/Auth/index';
import { useContext } from 'react';
import './styles.css';


// This is the navigation component.  This is how we navigate the app in order to display different information within the App Shell. The Navigation lives on the left hand side of the app shell.

const Navigation = () => {

  //Navigation Hooks
  const navigate = useNavigate();
  const { tabValue } = useParams();
  
  // Logout Functionality
  const handleLogoutClick = (e) => {
    e.preventDefault();
    logout();
    navigate('/login');
  }

  // Logout Auth Context
  const { logout } = useContext(AuthContext);

  return (
    <>
      <div>
        {/* Navigation Group and group parameters */}
        <Tabs className='Tabs' color="green" orientation="vertical" variant="pills" defaultValue="dashboard" value={tabValue} onTabChange={(value) => navigate(`/${value}`)}>

            {/* Individual navigation tabs and their respective parameters */}
          <Tabs.List>
            <Tabs.Tab value="dashboard" icon={<Dashboard size={14} />}>Dashboard</Tabs.Tab>
            <Tabs.Tab value="ticket" icon={<Bug size={14} />}>Ticket</Tabs.Tab>
            <Tabs.Tab value="teams" icon={<Users size={14} />}>Teams</Tabs.Tab>
            <Tabs.Tab value="teammember" icon={<User size={14} />}>Team Members</Tabs.Tab>
          </Tabs.List>
        </Tabs>

          {/* Logout button and parameters */}
        <Button ml={15} onClick={(e) => handleLogoutClick(e)} className="Logout" color='gray'>Logout</Button>
      </div>
    </>
  );
};

export default Navigation;
