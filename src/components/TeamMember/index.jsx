import { Group, Text, Button, Paper, Avatar, Collapse, Indicator } from '@mantine/core';
import { useState } from 'react';
import { User } from 'tabler-icons-react';

const TeamMember = () => {
  const [opened, setOpened] = useState(false);
  const [openedOne, setOpenedOne] = useState(false);
  
  return (
    <>
      <Button color="green" onClick={() => setOpened((o) => !o)}>
        Team 1
      </Button>
      <Collapse in={opened}>
        <Paper shadow="sm" radius="lg" p="lg" withBorder>
          <Group position="left">
            <Indicator color="green" size={11} processing>
              <Avatar color="dark" radius="sm">
                <User size={24} />
              </Avatar>
            </Indicator>
            <Text weight='bold'>Camilla Rees</Text>
            <Text weight='lighter'>
              Strengths: Team collaborator, Problem solver
            </Text>
          </Group>
        </Paper>

        <Paper shadow="sm" radius="lg" p="lg" withBorder>
          <Group position="left">
            <Indicator color="green" size={11} processing>
              <Avatar color="dark" radius="sm">
                <User size={24} />
              </Avatar>
            </Indicator>
            <Text weight='bold'>Hunter Fehr</Text>
            <Text weight='lighter'>
              Strengths: Driven, Collborative, Backend Development
            </Text>
          </Group>
        </Paper>

        <Paper shadow="sm" radius="lg" p="lg" withBorder>
          <Group position="left">
            <Indicator color="green" size={11} processing>
              <Avatar color="dark" radius="sm">
                <User size={24} />
              </Avatar>
            </Indicator>
            <Text weight='bold'>Jacob Dang</Text>
            <Text weight='lighter'>
              Strengths: Accountable, Cooperative, Responsible
            </Text>
          </Group>
        </Paper>
      </Collapse>

      <Button color="green" onClick={() => setOpenedOne((o) => !o)}>
        Team 2
      </Button>
      <Collapse in={openedOne}>
        <Paper shadow="sm" radius="lg" p="lg" withBorder>
          <Group position="left">
            <Indicator color="green" size={11} processing>
              <Avatar color="dark" radius="sm">
                <User size={24} />
              </Avatar>
            </Indicator>
            <Text weight='bold'>Kenny W. Lino</Text>
            <Text weight='lighter'>
              Strengths: Problem Solving, Debugging, Responsible
            </Text>
          </Group>
        </Paper>

        <Paper shadow="sm" radius="lg" p="lg" withBorder>
          <Group position="left">
            <Indicator color="grey" size={11}>
              <Avatar color="dark" radius="sm">
                <User size={24} />
              </Avatar>
            </Indicator>
            <Text weight='bold'>Trace Dugar</Text>
            <Text weight='lighter'>
              Strengths: Front-end, Styling, Design
            </Text>
          </Group>
        </Paper>

        <Paper shadow="sm" radius="lg" p="lg" withBorder>
          <Group position="left">
            <Indicator color="green" size={11} processing>
              <Avatar color="dark" radius="sm">
                <User size={24} />
              </Avatar>
            </Indicator>
            <Text weight='bold'>Ryan</Text>
            <Text weight='lighter'>
              Strengths: Teaching, Kindness, Bananas or Potato
            </Text>
          </Group>
        </Paper>
      </Collapse>
    </>
  );
}

export default TeamMember;