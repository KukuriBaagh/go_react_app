import React, { useState } from 'react';
import useForm from '@mantine/hooks';
import { Button, Group, Modal } from '@mantine/core';

const AddTodos = () => {
  const [open, setOpen] = useState(false);

  const form = useForm({
    initialValue: {
      title: '',
      body: '',
    },
  });

  return (
    <>
      <Modal opened={open} onClose={() => setOpen(false)} title='Create todo'>
        Text
      </Modal>
      <Group position='center'>
        <Button fullWidth mb={12} onClick={() => setOpen(true)}>
          ADD TODO
        </Button>
      </Group>
    </>
  );
};

export default AddTodos;
