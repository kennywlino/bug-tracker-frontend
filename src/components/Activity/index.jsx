import { Timeline, Text, Title, Space, ThemeIcon } from '@mantine/core';
import { Check } from 'tabler-icons-react';

// This component is for labeling a Team Members progress throughout the day as they open tickets an to track their progress in a visual way

const Activity = () => {
  return (
    <>
    {/* Open Ticket Appears at the top */}
      <Space h="md" />
      {/* Component Title */}
      <Title>Activity Log</Title>
      <Space h="md" />

      {/* Timeline component*/}
      <Timeline mt={20} ml={10} active={3} bulletSize={24} lineWidth={2}>

        {/* Timeline Circle / Item title */}
        <Timeline.Item title="Open 'Axios 403'" color='green'>
          {/* Open Timeline Item Duration */}
          <Text size="xs" mt={4}>46 min ago</Text>
        </Timeline.Item>

        {/* Timeline Circle / Item title */}
        <Timeline.Item title="Resolved '404'"
          color='green'

          // Icon Information within the Timeline Entry Revealing Completion
          bullet={<ThemeIcon
            size={16}
            color="green"
            radius="xs"
          >
            <Check size={14} />
          </ThemeIcon>
          } >

            {/* Timeline Item Duration */}
          <Text size="xs" mt={4}>1 hour ago</Text>
        </Timeline.Item>

          {/* Timeline Circle / Item title */}
        <Timeline.Item title="Opened 'bugorama'"
          lineVariant="dashed"
          color='green'

          // Icon Information within the Timeline Entry Revealing Completion
          bullet={<ThemeIcon
            size={16}
            color="green"
            radius="xs"
          >
            <Check size={14} />
          </ThemeIcon>
          } >

            {/* Timeline Item Duration */}
          <Text size="xs" mt={4}>1 week ago</Text>
        </Timeline.Item>
      </Timeline>
      <Space h="md" />
    </>
  );
}

export default Activity;