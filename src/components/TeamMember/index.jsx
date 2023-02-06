import { Group, Text, Button, Paper, Avatar, Collapse, Indicator } from '@mantine/core';
import { useState } from 'react';
import { User } from 'tabler-icons-react';

const TeamMember = () => {
  const [opened, setOpened] = useState(false);
  const [openedOne, setOpenedOne] = useState(false);


  // This is the component that contains all of the team member data. Data such as their display picture, an online idicator which is green and pulsing to indiciate the user is currently online or gray to show that they are offline. The container per team memeber also has their name and strengths. The team member drop down buttons have been labeled and there are only 2 teams in this example.  The code has been labeled as follows per user from top to bottom of their container: Indicator, Profile Picture, Team Memeber Name, and Team Memeber Strengths.

  return (
    <>
      {/* ----- Team DropDown button ----- */}
      <Button color="green" onClick={() => setOpened((o) => !o)}>
        Team 1
      </Button>
      <Collapse in={opened}>
        <Paper shadow="sm" radius="lg" p="lg" withBorder>
          <Group position="left">
            {/* ------ Indicator Dot ------ */}
            <Indicator color="green" size={11} processing>
              {/* ------- Profile Picture ------- */}
              <Avatar src="https://media.licdn.com/dms/image/D5603AQHNTq2UEOLZ5A/profile-displayphoto-shrink_800_800/0/1671139885545?e=1681344000&v=beta&t=SeVUCH_rAJ9gWeXImVo7ntjO8xMJj54t4c7jxfgD4q4" radius="sm">
                <User size={24} />
              </Avatar>
            </Indicator>
            {/* ------ Team Memeber Name ------ */}
            <Text weight='bold'>Camilla Rees</Text>
            {/* ------ Team Member Strengths ------- */}
            <Text weight='lighter'>
              Strengths: Team collaborator, Problem solver
            </Text>
          </Group>
        </Paper>

        <Paper shadow="sm" radius="lg" p="lg" withBorder>
          <Group position="left">
            {/* ----- Indicator Dot ------ */}
            <Indicator color="green" size={11} processing>
              {/* ------ Profile Picture ------ */}
              <Avatar src="https://media.licdn.com/dms/image/D5635AQHrTZIEq_zhOw/profile-framedphoto-shrink_800_800/0/1675223227746?e=1676311200&v=beta&t=FiOMU2-bC67lljL13qrKusCiHG6G1S9Y_XHr9je334g" radius="sm">
                <User size={24} />
              </Avatar>
            </Indicator>
            {/* ------ Team Member Name ------ */}
            <Text weight='bold'>Hunter Fehr</Text>
            {/* ----- Team Member Strengths ----- */}
            <Text weight='lighter'>
              Strengths: Driven, Collborative, Backend Development
            </Text>
          </Group>
        </Paper>

        <Paper shadow="sm" radius="lg" p="lg" withBorder>
          <Group position="left">
            {/* ------- Indicator Dot ------- */}
            <Indicator color="green" size={11} processing>
              {/*  ------ Profile Picture ------ */}
              <Avatar src="https://media.licdn.com/dms/image/C5603AQGZfzlfx3bzOQ/profile-displayphoto-shrink_800_800/0/1659722783594?e=1681344000&v=beta&t=2hbL_wSF8AkBotx2LySUTgD_IEe0oFEM6mD-6jT3oec" radius="sm">
                <User size={24} />
              </Avatar>
            </Indicator>
            {/* ------ Team Member Name ------ */}
            <Text weight='bold'>Jacob Dang</Text>
            {/* ------ Team Member Strengths ------ */}
            <Text weight='lighter'>
              Strengths: Accountable, Cooperative, Responsible
            </Text>
          </Group>
        </Paper>
      </Collapse>
      {/* ------ Team DropDown button ------ */}
      <Button color="green" onClick={() => setOpenedOne((o) => !o)}>
        Team 2
      </Button>
      <Collapse in={openedOne}>
        <Paper shadow="sm" radius="lg" p="lg" withBorder>
          <Group position="left">
            {/* ----- Indicator Dot ------ */}
            <Indicator color="green" size={11} processing>
              {/* ----- Profile Picture ------ */}
              <Avatar src="https://media.licdn.com/dms/image/D5603AQEqly4-fgv8gg/profile-displayphoto-shrink_800_800/0/1670745414402?e=1681344000&v=beta&t=bJQwY0sMLNyQW-AVNy1VIEnTPBzfm9QVlrOVDOVL33Y" radius="sm">
                <User size={24} />
              </Avatar>
            </Indicator>
            {/* ------ Team Member Name ------ */}
            <Text weight='bold'>Kenny W. Lino</Text>
            {/* ------ Team Member Strengths ------ */}
            <Text weight='lighter'>
              Strengths: Problem Solving, Debugging, Responsible
            </Text>
          </Group>
        </Paper>

        <Paper shadow="sm" radius="lg" p="lg" withBorder>
          <Group position="left">
            {/* ----- Indicator Dot ------ */}
            <Indicator color="grey" size={11}>
              {/* ------ Profile Picture ------ */}
              <Avatar src="https://media.licdn.com/dms/image/D5635AQEDVZX90tp4ew/profile-framedphoto-shrink_200_200/0/1675706130592?e=1676311200&v=beta&t=cVbBcd9NqZ2QuHQwRCFshxrJmIZ2gydrFHCT8VvVaw8" radius="sm">
                <User size={24} />
              </Avatar>
            </Indicator>
            {/* ------ Team Member Name ------ */}
            <Text weight='bold'>Trace Dugar</Text>
            {/* ------ Team Member Strengths ------ */}
            <Text weight='lighter'>
              Strengths: Frontend Development, Styling, Design
            </Text>
          </Group>
        </Paper>

        <Paper shadow="sm" radius="lg" p="lg" withBorder>
          <Group position="left">
            {/*------ Indicator Dot ------*/}
            <Indicator color="green" size={11} processing>
              {/*------ Profile Picture ------*/}
              <Avatar src="https://media.licdn.com/dms/image/C4E03AQHFxrEQCvEllQ/profile-displayphoto-shrink_800_800/0/1541301833065?e=1681344000&v=beta&t=-r-s9Th8ApTz1cNNF1d560kuC4WYeOmCX-yEICKfDVA" radius="sm">
                <User size={24} />
              </Avatar>
            </Indicator>
            {/*------ Team Member Name ------*/}
            <Text weight='bold'>Ryan</Text>
            {/* -------Team Member Strengths ------- */}
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