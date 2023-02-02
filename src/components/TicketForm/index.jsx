import { TextInput, Checkbox, Button, Group, Box, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';

const TicketForm = () => {

  // function Demo() {
  const form = useForm({
    initialValues: {
      email: '',
      termsOfService: false,
    },


    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <>

      <Box sx={{ maxWidth: 300 }} mx="auto">
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <TextInput
            withAsterisk
            label="Team Member Name:"
            placeholder="Name"
            {...form.getInputProps('email')}
          />

          <TextInput
            withAsterisk
            label="Issue:"
            placeholder="Bug Title"
            // {...form.getInputProps('email')}
          />

          <Textarea
            withAsterisk
            label="Describe Issue:"
            placeholder="Bug Discription"
            autosize
            minRows={2}
          />

          <Checkbox
            mt="md"
            label="Priority"
            color={'red'}
            {...form.getInputProps('termsOfService', { type: 'checkbox' })}
            />

          <Checkbox
            mt="md"
            label="Non Priority"
            color={'yellow'}
            // {...form.getInputProps('termsOfService', { type: 'checkbox' })}
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
