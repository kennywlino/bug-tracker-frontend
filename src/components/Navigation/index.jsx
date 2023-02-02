import { Tabs, Button } from '@mantine/core';
import { useNavigate, useParams } from 'react-router-dom';
import { Bug, Dashboard, Home, Users } from 'tabler-icons-react';
import './styles.css';

const Navigation = () => {

  const navigate = useNavigate();
  const { tabValue } = useParams();

  return (
    <>
      <div>
      <Tabs className='Tabs' color="green" orientation="vertical" variant="pills" defaultValue="hero" value={tabValue} onTabChange={(value) => navigate(`/${value}`)}>
        <Tabs.List>
          <Tabs.Tab value="hero" icon={<Home size={14} />}>Home</Tabs.Tab>
          <Tabs.Tab value="ticket" icon={<Bug size={14} />}>Ticket</Tabs.Tab>
          <Tabs.Tab value="dashboard" icon={<Dashboard size={14} />}>Dash Board</Tabs.Tab>
          <Tabs.Tab value="teams" icon={<Users size={14} />}>Teams</Tabs.Tab>
        </Tabs.List>
      </Tabs>

      <Button ml={15} mt={160} color='gray'>Logout</Button>
      </div>
    </>
  );
};

export default Navigation;
