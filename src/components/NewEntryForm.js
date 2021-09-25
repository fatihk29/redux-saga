import React from "react";
import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";

function NewEntry({
  addEntry,
  description,
  value,
  isExpense,
  setDescription,
  setValue,
  setIsExpense,
}) {
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
      <ButtonSaveOrCancel
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
      />
    </Form>
  );
}

export default NewEntry;
