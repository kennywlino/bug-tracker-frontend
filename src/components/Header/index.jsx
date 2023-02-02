import { useState } from 'react';
import { Header as MantineHeader } from '@mantine/core';
import { MediaQuery, Burger, useMantineTheme } from '@mantine/core';

const Header = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <>
      <MantineHeader
        height={60}
        p="lg"
      >
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              size="sm"
              color={theme.colors.gray[6]}
              mr="xl"
            />
          </MediaQuery>
          <h1>VFT</h1>
        </div>
      </MantineHeader>
    </>
  );
};



export default Header;
