import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addEntryRedux, updateEntryRedux } from "../actions/entries.actions";
import { closeEditModal } from "../actions/modals.actions";
import { v4 as uuid } from "uuid";

export default function useEntryDetails(desc = "", val = "", isExp = true) {
  const [description, setDescription] = useState(desc);
  const [value, setValue] = useState(val);
  const [isExpense, setIsExpense] = useState(isExp);
  const dispatch = useDispatch();

  useEffect(() => {
    setDescription(desc);
    setValue(val);
    setIsExpense(isExp);
  }, [desc, val, isExp]);

  function updateEntry(id) {
    dispatch(updateEntryRedux(id, { description, value, isExpense }));
    dispatch(closeEditModal());
    resetValue();
  }

  function addEntry() {
    dispatch(addEntryRedux({ id: uuid(), description, value, isExpense }));
    resetValue();
  }
  function resetValue() {
    setDescription("");
    setValue("");
    setIsExpense(false);
  }
  return {
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense,
    addEntry,
    updateEntry,
  };
}
