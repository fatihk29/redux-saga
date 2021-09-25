import { Form } from "semantic-ui-react";

function NewEntry() {
  return (
    <Form unstackable={true}>
      <Form.Group>
        <Form.Input
          icon="tags"
          width={12}
          label="Description"
          placeholder="New Shinny Thing"
        />
        <Form.Input
          icon="dollar"
          width={4}
          label="Value"
          placeholder="100.00"
          iconPosition="left"
        />
      </Form.Group>
    </Form>
  );
}

export default NewEntry;
