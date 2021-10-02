import React from "react";
import { Form } from "semantic-ui-react";

import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";
import useEntryDetails from "../hooks/useEntryDetails";

function NewEntry() {
  const {
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense,
    addEntry,
  } = useEntryDetails();
  return (
    <Form unstackable={true}>
      <EntryForm
        description={description}
        value={value}
        setValue={setValue}
        setDescription={setDescription}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
      />
      <ButtonSaveOrCancel addEntry={addEntry} />
    </Form>
  );
}

export default NewEntry;
