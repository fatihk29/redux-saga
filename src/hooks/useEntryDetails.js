import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addEntryRedux } from "../actions/entries.actions";
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

  function addEntry() {
    dispatch(addEntryRedux({ id: uuid(), description, value, isExpense }));
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
  };
}
