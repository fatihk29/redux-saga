import React from "react";
import { useDispatch } from "react-redux";
import { Modal, Button } from "semantic-ui-react";
import { closeEditModal } from "../actions/modals.actions";
import useEntryDetails from "../hooks/useEntryDetails";
import EntryForm from "./EntryForm";

function ModalEdit({ isOpen, description, value, isExpense }) {
  const dispath = useDispatch();
  const entryUpdate = useEntryDetails(description, value, isExpense);
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit Entry</Modal.Header>
      <Modal.Content>
        <EntryForm
          description={entryUpdate.description}
          value={entryUpdate.value}
          setValue={entryUpdate.setValue}
          setDescription={entryUpdate.setDescription}
          isExpense={isExpense}
          setIsExpense={entryUpdate.setIsExpense}
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
