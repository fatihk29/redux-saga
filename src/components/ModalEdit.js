import React from "react";
import { useDispatch } from "react-redux";
import { Modal, Button } from "semantic-ui-react";
import { closeEditModal } from "../actions/modals.actions";
import EntryForm from "./EntryForm";

function ModalEdit({
  isOpen,
  description,
  value,
  isExpense,
  setDescription,
  setValue,
  setIsExpense,
}) {
  console.log("entry", isOpen, description, value);
  const dispath = useDispatch();
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
        <Button onClick={() => dispath(closeEditModal())}>Close</Button>
        <Button onClick={() => dispath(closeEditModal())} positive>
          OK
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalEdit;
