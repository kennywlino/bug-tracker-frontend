import { TextInput, Checkbox, Button, Group, Box, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';

const TicketForm = () => {


  const form = useForm({
    initialValues: {
      teamMember: '',
      issueType: '',
      notes: '',
      priority: false,
    },


  });

  return (
    <>

      <Box data-testid='ticketForm' sx={{ maxWidth: 300 }} mx="auto">
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <TextInput
            withAsterisk
            label="Team Member Name:"
            placeholder="Name"
            {...form.getInputProps('teamMember')}
          />

          <TextInput
            withAsterisk
            label="Issue:"
            placeholder="Bug Title"
            {...form.getInputProps('issueType')}
          />

          <Textarea
            withAsterisk
            label="Describe Issue:"
            placeholder="Bug Description"
            autosize
            minRows={2}
            {...form.getInputProps('notes')}
          />

          <Checkbox
            mt="md"
            label="Priority"
            color={'red'}
            {...form.getInputProps('priority', { type: 'checkbox' })}
            />

          <Group position="right" mt="md">
            <Button color={'green'} type="submit">Submit</Button>
          </Group>
        </form>
      </Box>

    </>
  );
};

export default TicketForm;
