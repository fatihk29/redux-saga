import React from "react";
import { Modal, Button } from "semantic-ui-react";
import EntryForm from "./EntryForm";
import NewEntryForm from "./NewEntryForm";

function ModalEdit({
  isOpen,
  setIsOpen,
  description,
  value,
  isExpense,
  setDescription,
  setValue,
  setIsExpense,
}) {
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit Entry</Modal.Header>
      <Modal.Content>
        <EntryForm
          description={description}
          value={value}
          setValue={setValue}
          setDescription={setDescription}
          isExpense={isExpense}
          setIsExpense={setIsExpense}
        />
        <Modal.Description>Something Else</Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setIsOpen(false)}>Close</Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalEdit;
