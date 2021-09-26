import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form } from "semantic-ui-react";
import { v4 as uuid } from "uuid";

import { addEntryRedux } from "../actions/entries.actions";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";

function NewEntry() {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(false);
  const dispatch = useDispatch();

  function addEntry() {
    dispatch(addEntryRedux({ id: uuid(), description, value, isExpense }));
    setDescription("");
    setValue("");
    setIsExpense(false);
  }
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
