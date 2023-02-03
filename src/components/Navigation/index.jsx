import { Tabs, Button } from '@mantine/core';
import { useNavigate, useParams } from 'react-router-dom';
import { Bug, Dashboard, Home, Users, User } from 'tabler-icons-react';
import { AuthContext } from '../../context/Auth/index';
import { useContext } from 'react';
import './styles.css';

const Navigation = () => {

  const navigate = useNavigate();
  const { tabValue } = useParams();

  const handleLogoutClick = (e) => {
    e.preventDefault();
    logout();
    navigate('/login');
}

const { logout } = useContext(AuthContext);

  return (
    <>
      <div>

        <Tabs className='Tabs' color="green" orientation="vertical" variant="pills" defaultValue="dashboard" value={tabValue} onTabChange={(value) => navigate(`/${value}`)}>

          <Tabs.List>
            <Tabs.Tab value="ticket" icon={<Bug size={14} />}>Ticket</Tabs.Tab>
            <Tabs.Tab value="dashboard" icon={<Dashboard size={14} />}>Dash Board</Tabs.Tab>
            <Tabs.Tab value="teams" icon={<Users size={14} />}>Teams</Tabs.Tab>
            <Tabs.Tab value="teammember" icon={<User size={14} />}>Team Member</Tabs.Tab>
          </Tabs.List>
        </Tabs>

        <Button ml={15} onClick={(e) => handleLogoutClick(e)} className="Logout" color='gray'>Logout</Button>
      </div>
    </>
  );
};

export default Navigation;
