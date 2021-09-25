import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";

function NewEntry({ addEntry }) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  return (
    <Form unstackable={true}>
      <Form.Group>
        <Form.Input
          icon="tags"
          width={12}
          label="Description"
          placeholder="New Shinny Thing"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <Form.Input
          icon="dollar"
          width={4}
          label="Value"
          placeholder="100.00"
          iconPosition="left"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </Form.Group>
      <ButtonSaveOrCancel
        addEntry={addEntry}
        description={description}
        value={value}
      />
    </Form>
  );
}

export default NewEntry;
