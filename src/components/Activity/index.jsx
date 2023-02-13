import { Timeline, Text, Title, Space, Center } from '@mantine/core';

const Activity = () => {
    return (
        <>
          <Space h="md" />
        <Title>Activity Log</Title>
          <Space h="md" />
        <Timeline mr={0} active={3} bulletSize={24} lineWidth={2}>
      <Timeline.Item title="Resolved 'Axios 403'">
        <Text size="xs" mt={4}>1 hour ago</Text>
      </Timeline.Item>

      <Timeline.Item title="Resolved '404'">
        <Text size="xs" mt={4}>1 hour ago</Text>
      </Timeline.Item>

      <Timeline.Item title="Opened 'bugorama'" lineVariant="dashed">
        <Text size="xs" mt={4}>1 week ago</Text>
      </Timeline.Item>
    </Timeline>
    <Space h="md" />
    </>
  );
}

export default Activity;